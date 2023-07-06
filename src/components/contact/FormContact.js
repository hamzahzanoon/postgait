import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FormContact = () => {
  const [t] = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageTitle: '',
    message: '',
  });

  const { name, email, phone, messageTitle, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
     <div className='form-top'>
      <div>
      <label>
      <h6>{t('Your Name')}</h6>
      <input
        type="text"
        name="name"
        placeholder={t('Your Full Name')}
        value={name}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      <h6>{t('Email')}</h6>
      <input
        type="email"
        name="email"
        placeholder='name@domain.com'
        value={email}
        onChange={handleChange}
      />
    </label>
    <br />
    <label>
      <h6>{t('Phone')}</h6>
      <input
        type="tel"
        name="phone"
        placeholder='51 234 5678'
        value={phone}
        onChange={handleChange}
      />
    </label>
      </div>
      <div>
       <img src={require("../../images/Clip_path_group-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
      <br />
      <label>
        <h6>{t('Message Title')}</h6>
        <input
          type="text"
          name="messageTitle"
          value={messageTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <h6>{t('Message')}</h6>
        <textarea
          name="message"
          value={message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className='contact-form-btn' type="submit">{t('Send')}</button>
      <button className='contact-form-btn2' type="submit">{t('Cancel')}</button>
    </form>
  );
};

export default FormContact;

