import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navbar/NavBar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_9kawf6r';
    const templateID = 'template_0zh8m4f';
    const userID = 'q2TtvfXYzXXS9OHUD';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('E-mail envoyé avec succès:', response);
        setFormData({ name: '', email: '', message: '' });
        setIsFormSubmitted(true);

        // Effacer le message après 3 secondes (ajustable selon vos préférences)
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        console.error('Status:', error.status);
        console.error('Text:', error.text);
      });
  };
  return (
    <div id="contact">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h2>Me Contacter</h2>
        {isFormSubmitted && <p style={{ color: 'green' }}>Votre message a bien été envoyé !</p>}
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
