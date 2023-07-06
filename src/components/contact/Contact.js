import React from 'react';
import './Contact.css';
import FormContact from './FormContact';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [t , il8] = useTranslation();

  return (
    <div>
     <div className='contact container'>
      <div className='c-contact'>
       <h2>{t('How can we help you?')}</h2>
       <p>{t('If you would like to know more about how you can enjoy your dashboard on the web, please contact us and we will be in touch.')}</p>
        <div>
         <div className='c-icons'>
          <div>
           <img src={require("../../images/2055752009.jpg")} alt='shape1' />
           <span>{t('Visit us')}</span>
           <p>{t('Jeddah, Saudi Arabia')}</p>
          </div>
           <div>
            <div>
             <img src={require("../../images/Call.jpg")} alt='shape1' />
             <span>{t('Call us')}</span>
            <p>+966 055 021 0280</p>
          </div>
         </div>
         <div>
         <div>
          <img src={require("../../images/Message.jpg")} alt='shape1' />
          <span>{t('Talk to us')}</span> 
          <p>support@postgait.com</p>
         </div>
        </div>
        <div>
         <div>
          <img src={require("../../images/12431494641536559839 1.jpg")} alt='shape1' />
           <span>{t('Working hours')}</span>
          <p>{t('Sunday-Thursday: 9 am — 6 pm')}</p>
         </div>
        </div>
         </div>
        </div>
      </div>
      <div>
       <FormContact />
      </div>
     </div>
    </div>
  )
}

export default Contact
