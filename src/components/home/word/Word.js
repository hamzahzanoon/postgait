import React from 'react';
import './Word.css';
import { useTranslation } from 'react-i18next';

const Word = () => {
  const [t , il8] = useTranslation();
  
  return (
    <div className='word'>
     <div className='w-word'>
      <div className='wordCeanter'>
       <h3>{t('Get started now and ship your orders with the best logistics service provider')}</h3>
       <h3>{t('In the Arab world')}</h3>
       <button className='wordbtn'>{t('Start charging now')}</button>
      </div>
     </div>
    </div>
  )
}

export default Word;