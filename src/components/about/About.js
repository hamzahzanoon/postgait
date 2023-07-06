import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t , il8] = useTranslation();

  return (
    <div className='about'>
     <div className='a-about'>
      <div className='a-about1'>
       <div className='about-title'>
        <h2>{t('We lead fleets using smarter technology to anything from anywhere in your city to local Sa adiya provinces or to the international world')} </h2>
       </div>
       <div className='a-bout-imges'>
       </div>
       <hr />
      </div>
     </div>
     <div className='a-about2 container'>
       <div className='a-about2-img-left'>
        <img src={require("../../images/Objects.jpg")} alt='shape1' />
       </div>
       <div className='a-about2-img'>
        <h3>{t('Our idea')}</h3>
        <img src={require("../../images/Vecsstor.jpg")} alt='shape1' />
        <p>{t('We were founded, stepping miles towards innovation and leadership in the field of transport and logistics, as Postgait provides reliable and logistical solutions that fulfill the aspirations of every merchant by providing all the services he needs when shipping and transporting goods from one place to another.')}</p>
       </div>
     </div>
     <div className='a-about2 container'>
      <div className='a-about2-img'>
      <h3>{t('Our message')}</h3>
      <img src={require("../../images/Vecsstor.jpg")} alt='shape1' />
       <p>{t('Providing unique services with high quality and competitive prices that make you comfortable in managing your shipments and focusing on developing your products and marketing your brand.')}</p>
      </div>
      <div className='a-about2-img-left'>
       <img src={require("../../images/Artboard 1.jpg")} alt='shape1' />
      </div>
     </div>
     <div className='a-about2 container'>
      <div className='a-about2-img-left'>
       <img src={require("../../images/Mesa de trabajo 1.jpg")} alt='shape1' />
      </div>
      <div className='a-about2-img'>
       <h3>{t('Our vision')}</h3>
       <img src={require("../../images/Vecsstor.jpg")} alt='shape1' />
       <p>{t('To be the best choice for traders and investors, and to do our utmost to provide innovative logistical and executive services and solutions.')}</p>
      </div>
     </div>
     <div className='a-about3'>
      <div className='a-about-botton'>
       <h3>{t('Lowest prices no matter how much you charge')}</h3>
       <p>{t('Compare real-time rates and delivery times for all carriers and automatically select the best carrier for each shipment based on cost and delivery time. Thanks to our great membership, we have negotiated reserved rates for many companies, for your convenience.')}</p>
        <div className='h-btn submits'>
         <button className='submit'>{t('Start charging now')}
          <i className="fa-solid fa-truck-fast"></i>
         </button>
        </div>
      </div>
      <div className='a-about2-img-left'>
       <img className='a-about-botton-img' src={require("../../images/Screenshot 2023-05-21 191310.png")} alt='shape1' />
      </div>
     </div>
    </div>
  )
}

export default About;