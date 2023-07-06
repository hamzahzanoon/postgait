import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Cards = () => {
  const [t] = useTranslation();
  
  return (
    <div className='c-cards-mane'>
     <div className='main-main'>
       <div className='c-card'>
       <Link to="/cards2">
        <div className='c-card-img'>
         <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        </div>
      </Link>
        <div className='card-bottom'>
         <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
         <span><i class="fa-regular fa-eye"></i> 1745 </span>
         <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
         <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
        </div>
       </div>
    
      
      <div className='c-card'>
       <Link to="/cards2">
        <div className='c-card-img'>
         <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        </div>
       </Link>
       <div className='card-bottom'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        <span><i class="fa-regular fa-eye"></i> 1745 </span>
        <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
        <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
       </div>
      </div>
     
    
     <div className='c-card'>
      <Link to="/cards2">
       <div className='c-card-img'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
       </div>
      </Link>
      <div className='card-bottom'>
       <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
       <span><i class="fa-regular fa-eye"></i> 1745 </span>
       <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
       <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
       </div>
      </div>
  
     <div className='c-card'>
      <Link to="/cards2">
       <div className='c-card-img'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
       </div>
      </Link>
      <div className='card-bottom'>
       <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
       <span><i class="fa-regular fa-eye"></i> 1745 </span>
       <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
       <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
      </div>
      </div>
   
      <div className='c-card'>
       <Link to="/cards2">
        <div className='c-card-img'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        </div>
       </Link>
       <div className='card-bottom'>
        <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
        <span><i class="fa-regular fa-eye"></i> 1745 </span>
        <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
        <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
       </div>
      </div>

       <div className='c-card'>
        <Link to="/cards2">
         <div className='c-card-img'>
          <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
         </div>
        </Link>
         <div className='card-bottom'>
         <p>{t('Why Do Traders Sell Their Products Through Online Stores?')}</p>
         <span><i class="fa-regular fa-eye"></i> 1745 </span>
         <span><i class="fa-solid fa-thumbs-up"></i> 4 </span>
         <span><i class="fa-solid fa-thumbs-down"></i> 0 </span>
        </div>
       </div>
   
     </div>
    </div>
  )
}

export default Cards;
