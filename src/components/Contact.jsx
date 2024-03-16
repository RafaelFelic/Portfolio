import React, { useState } from 'react';
import useTextAnimation from '../utils/textAnimation';
import FormField from './FormField';

function Contact() {
  const sectionRef = useTextAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form
      id="contact"
      className="font-['Raleway'] flex flex-col items-center justify-center gap-2.5"
      ref={sectionRef}
      onSubmit={handleSubmit}
    >
      <h2 className="hide section font-[DOSfont] text-[#ddd] text-center text-5xl my-7 textShadow">
        Contact
      </h2>
      <h3 className="mb-5">
        Do you have a project concept? Let us collaborate to make it happen.
      </h3>
      <FormField
        label="NAME"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="EMAIL"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="MESSAGE"
        id="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        className="w-20 text-cyan bg-transparent p-2 mb-8 rounded-full hover:text-black hover:bg-cyan-300"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default Contact;
