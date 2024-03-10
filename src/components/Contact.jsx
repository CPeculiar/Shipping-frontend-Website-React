import React from 'react'
import { useState } from 'react'; 
import '../App.css';

const ContactUs = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
 
    // Clearing the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='contact-us-container'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='contact-us-form'>
          <label htmlFor="name" className='contact-us-form'>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contact-us-form'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contact-us-form'>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='contact-us-form'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className='contact-us-form button '>Submit</button>
      </form>
    </div>

  );
};

export default ContactUs;