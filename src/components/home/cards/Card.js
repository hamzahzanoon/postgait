import React from 'react';
import './Card.css';
import { useTranslation } from 'react-i18next';

const Cards = () => {
  const [t , il8] = useTranslation();

  return (
    <div className='h-card'>
     <div className='container'>
      <div className='title title2'>
       <h1>{t('The features of Postgait are many waiting for you!')}</h1>
       <p> {t('We offer a lot of advantages for electronic stores to ship their products to their customers in all cities and governorates of the Kingdom of Saudi Arabia and international shipping')}</p>
      </div>
      <div className='a-print'>
       <div className='print print2'>
        <img src={require("../../../images/div.icon-removebg-preview.png")} alt='shape1' />
        <h3>{t('Efficiency')}</h3>
        <span>{t('We focus on increasing the sustainable efficiency of services and shipping security in order to ensure the safety of all different shipments and their safe arrival to customers.')}</span>
       </div>
       <div className='print print2'>
        <img src={require("../../../images/preview (2).png")} alt='shape1' />
        <h3>{t('Quality')}</h3>
        <span>{t('We are keen on quality and providing added value using advanced features that facilitate the flow of your e-commerce, increase sales and achieve customer satisfaction.')}</span>
       </div>
       <div className='print print2'>
         <img src={require("../../../images/div.icon__2_-removebg-preview.png")} alt='shape1' />
         <h3>{t('Continuous Improvement')}</h3>
         <span>{t('To dramatically improve warehouse operations such as operations, planning and flow and maintain high ethical standards.')}</span>
       </div>
       <div className='print print2'>
        <img src={require("../../../images/div.icon__5_-removebg-preview.png")} alt='shape1' />
        <h3>{t('Quick Conversion')}</h3>
        <span>{t('Electronic and payment transfer We have provided many payment method sUpon quick receipt.')}</span>
       </div>
       <div className='print print2'>
        <img src={require("../../../images/div.icon__4_-removebg-preview.png")} alt='shape1' />
        <h3>{t('Direct coordination')}</h3>
        <span>{t('Operations & Customer Service Direct and fast coordination between The company is managing and delivering all We have and the client works Level of professionalism')} </span>
       </div>
       <div className='print print2'>
        <img src={require("../../../images/div.icon__3_-removebg-preview.png")} alt='shape1' />
        <h3>{t('Cash on delivery')}</h3>
        <span>{t('Receive cash on delivery amounts in your e-wallet')}</span>
       </div>
      </div>
     </div>
    </div>
  )
}

export default Cards;