import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Label } from './Label';
import { Input } from './Input';
import { FileUpload } from './FileUpload';
import { motion } from 'framer-motion';  // Importiere Framer Motion

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    Telefon: '',
    anliegen: '',
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (newFiles) => {
    const uploadedFile = newFiles[0];
    if (uploadedFile && uploadedFile.type.startsWith('image/')) {
      setFile(uploadedFile);
    } else {
      alert('Bitte laden Sie nur Bilddateien hoch (jpg, png, gif, etc.)');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('Telefon', formData.Telefon);
    formDataToSend.append('anliegen', formData.anliegen);

    if (file) {
      formDataToSend.append('file', file, file.name);
    }

    emailjs
      .sendForm(
        'service_kj9hon8',
        'template_yeoj4kj',
        form.current,
        'fWONOBK-__-6-N47t'
      )
      .then(
        (result) => {
          console.log('E-Mail erfolgreich gesendet:', result.text);
          alert('Nachricht erfolgreich gesendet!');
        },
        (error) => {
          console.error('Fehler beim Senden der E-Mail:', error.text);
          alert('Fehler beim Senden der Nachricht.');
        }
      );
  };

  return (
    <motion.section
      id="Contact"
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Kontaktiere uns</h2>
          <p className="text-xl text-web mt-8">
          Verliere keine Zeit mehr und nehme mit uns jetzt unverbindlich Kontakt auf!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-3xl font-semibold text-web text-center mb-6">Kostenloses Erstgespräch</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6" encType="multipart/form-data">
              <div>
                <Label htmlFor="name" className="block text-lg font-medium text-neutral-700">
                  Vor- und Nachname
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Dein Vor- und Nachname"
                />
              </div>
              <div>
                <Label htmlFor="Telefon" className="block text-lg font-medium text-neutral-700">
                  Telefon
                </Label>
                <Input
                  type="text"
                  name="Telefon"
                  id="Telefon"
                  value={formData.Telefon}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Deine Telefonnummer"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-lg font-medium text-neutral-700">
                  E-Mail
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Deine E-Mail"
                />
              </div>
              <div>
                <Label htmlFor="anliegen" className="block text-lg font-medium text-neutral-700">
                  Mein Anliegen
                </Label>
                <select
                  name="anliegen"
                  id="anliegen"
                  value={formData.anliegen}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-neutral-300 focus:border-web focus:outline-none p-3 text-lg bg-transparent rounded-md"
                >
                  <option value="">Wähle ein Anliegen</option>
                  <option value="Vertragscheck">Vertragscheck</option>
                  <option value="Investments">Investments</option>
                  <option value="Absicherung">Absicherung</option>
                </select>
              </div>
              <div>
                <Label htmlFor="message" className="block text-lg font-medium text-neutral-700">
                  Nachricht
                </Label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b-2 border-neutral-300 focus:border-web focus:outline-none p-1 text-lg bg-transparent rounded-md"
                  rows="3"
                  placeholder="Deine Nachricht"
                ></textarea>
              </div>
              <div className="mt-4 md:hidden">
                <FileUpload onChange={handleFileChange} />
              </div>
              <button
                type="submit"
                className="bg-grund text-white px-6 py-3 rounded-full shadow-lg hover:bg-web transition duration-300 w-full"
              >
                Abschicken
              </button>
              <p className="text-sm text-neutral-500 mt-2 text-center">
    *Mit dem Absenden bestätigst du, dass du unsere <a href="/RichLife/AGB" className="text-web underline">AGB</a> gelesen und akzeptiert hast.
  </p>
            </form>
          </div>
          <div className="hidden md:block md:w-1/2 pt-[27vh]">
            <div>
              <FileUpload onChange={handleFileChange} />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
