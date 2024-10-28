import React, { useEffect, useState } from 'react';

const NavigationButtons = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Smooth scroll manually
  const smoothScrollTo = (targetPosition, duration = 1700) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      smoothScrollTo(targetPosition); // Use smooth scroll
    } else {
      console.warn(`Section with ID "${sectionId}" not found.`);
    }
  };

  // Throttling for scroll events
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleScroll = throttle(() => {
    const sections = ['HeroSection', 'Cards', 'Services', 'AboutMe', 'Contact', 'FAQ', 'Footer'];
    let currentSection = '';

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top >= 0 && top < window.innerHeight / 2) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
  }, 100); // Throttle to limit calls every 100ms

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsMobile(true); // Mobile state activated
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) return null; // Return nothing on mobile devices

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 space-y-4 pr-3 flex flex-col items-center">
     
      {/* Button 2 */}
      <button
        className={`bg-grund rounded-full w-3 h-3 shadow ${activeSection === 'Cards' ? 'ring-2 ring-web' : ''}`}
        onClick={() => scrollToSection('Cards')}
      ></button>
      {/* Button 3 */}
      <button
        className={`bg-grund rounded-full w-3 h-3 shadow ${activeSection === 'Services' ? 'ring-2 ring-web' : ''}`}
        onClick={() => scrollToSection('Services')}
      ></button>
      {/* Button 4 */}
      <button
        className={`bg-grund rounded-full w-3 h-3 shadow ${activeSection === 'AboutMe' ? 'ring-2 ring-web' : ''}`}
        onClick={() => scrollToSection('AboutMe')}
      ></button>
      {/* Button 5 */}
      <button
        className={`bg-grund rounded-full w-3 h-3 shadow ${activeSection === 'Contact' ? 'ring-2 ring-web' : ''}`}
        onClick={() => scrollToSection('Contact')}
      ></button>
      {/* Button 6 */}
      <button
        className={`bg-grund rounded-full w-3 h-3 shadow ${activeSection === 'FAQ' ? 'ring-2 ring-web' : ''}`}
        onClick={() => scrollToSection('FAQ')}
      ></button>

    </div>
  );
};

export default NavigationButtons;
