import React from 'react';
import './Vector.css';
import LazyLoad from './Slider';
import SimpleSlider from './Slider';
import { useTranslation } from 'react-i18next';

const Vectors = () => {
  const [t , il8] = useTranslation();

  return (
    <div className='vector'>
     <div className='containers '>
      <div className='title'>
       <h1>{t('Manage your entire shipments easily and quickly via your web dashboard')}</h1>
       <p style={{color: "#FC746C"}}> <span>{t('MENA’s #1')}</span> {t('shipping gateway for e-commerce stores and retailers to ship, manage, track, analyze and return orders With more than one carrier in a single dashboard.')}</p>
       <button className='submit'>{t('Start For Free')}</button>
       </div>
      <div className='v-vector'>
        <div className='img-left'>
         <img src={require("../../../images/Vectors.jpg")} alt='shape1' />
        </div>
        <div className='img-right'>
         <img src={require("../../../images/Screenshots.png")} alt='shape1' />
        </div>
      </div>
     </div>
     <div>

      <div className='erth'>
       <div>
       <img className='img_left' src={require("../../../images/erth2.png")} alt='shape1' />
      </div>
      <div className='title'>
       <div className='title2'>
        <h1>{t('Our Shipping & Distribution Partners')}</h1>
        <p>{t('A wide range of the best local and international companies')}</p>
       </div>
       <div className='erth-imges'>
        <img src={require("../../../images/smsa.png.jpg")} alt='shape1' />
        <img src={require("../../../images/name2.png")} alt='shape1' />
        <img src={require("../../../images/name-removebg-preview.png")} alt='shape1' />
       </div>
     </div>
     <div className='img_rigth'>
      <img src={require("../../../images/erth.png")} alt='shape1' />
     </div>
      </div> 
      
      <div>
       <SimpleSlider />
      </div>
   
     </div>
    </div>
  )
}

export default Vectors;