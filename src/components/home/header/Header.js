import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t , il8] = useTranslation();

  return (
    <div className='header'>
     <div className='h-center'>
      <h1>{t ('THE FASTEST SHIPPING PLATFORM FOR ONLINE STORES')}</h1>
      <p>{t('Postgait It is the most appropriate and safest choice for premium shipping')}</p>
      <div className='h-namber'>
       <div className='barth'>
        <h2>99.8%</h2>
        <span>{t('Success rate')}</span>
       </div>
       <div className='barth'>
        <h2>90+</h2>
        <span>{t('Client')}</span>
       </div>
       <div className='barth'>
        <h2>120{t('K')}</h2>
        <span>{t('Policy')}</span>
       </div>
      </div>
      <div className='h-btn'>
       <button className='submit'>{t('Start charging now')}
        <i className="fa-solid fa-truck-fast"></i>
       </button>
      </div>
     </div>
    </div>
  )
}

export default Header;
