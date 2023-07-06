import React from 'react';
import './HomeAbout.css';
import { useTranslation } from 'react-i18next';

const HomeAbout = () => {
  const [t , il8] = useTranslation();

  return (
    <div className='h-about'>
     <div className='container'>
      <div className='title'>
       <h1>{t('The Fastest, Easiest Way To Ship Your Products To Your Customers')}</h1>
       <p>{t('Postgait is distinguished by offering an unparalleled shipping experience for online store customers. We provide you with all the necessary tools to exceed your customers expectations')}</p>
      </div>
      <div className='a-print'>
       <div className='print'>
        <img src={require("../../../images/feature-ils-3.svg.jpg")} alt='shape1' />
        <h3>{t('Print the bill of lading')}</h3>
        <span>{t('Print the bill of lading and get ready to ship the order to your customer')} </span>
       </div>
       <div className='print'>
        <img src={require("../../../images/feature-ils-2.svg.jpg")} alt='shape1' />
        <h3>{t('Choose the right carrier')}</h3>
        <span>{t('Browse the many carriers and choose the right price for your shipment')}</span>
       </div>
       <div className='print'>
        <img src={require("../../../images/feature-ils-1.svg.jpg")} alt='shape1' />
        <h3>{t('Enter shipment information')}</h3>
        <span>{t('Enter the shipment information, its weight and the address of the customer to be shipped to')}</span>
       </div>
      </div>
     </div>
    </div>
  )
}

export default HomeAbout;