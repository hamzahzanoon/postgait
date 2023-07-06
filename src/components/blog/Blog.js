import React from 'react';
import Cards from './card/Card';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [t] = useTranslation();
  
  return (
    <div>
     <div className='blog'>
      <h2>{t('Welcome to BLOG')}</h2>
      <p>{t('We Provide Every New, Postgait Seek To Help You By Providing Explanations About Our Services Or Everything You Need To Know..')}</p>
     </div>
      <div className='description'>
       <div className='c-containers'>
        <div className='c-rectangle'>

         <div className='b-scearch'>
          <input type='scearch' placeholder={t('Find an article')} />
          <i class="fa-solid fa-magnifying-glass"></i>
         </div>

         <div>
          <Cards />
         </div>
        
        </div>
      </div>
     </div>
    </div>
  )
}

export default Blog;