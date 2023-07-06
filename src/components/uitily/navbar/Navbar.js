import React, { useState ,useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [t , il8] = useTranslation();

  const [active, setActive] = useState(1);
  const OpenActive = (index) => {
    setActive(index);
  }
  
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav")
  }
  
                                        
  return (
    <div className='n-navbars' >
      <nav>
       <div className='logo'>
        <Link to='/'>
         <img src={require("../../../images/preview.png")} alt='shape1' />
        </Link>
       </div>
       <div className='n-nav'>
        <ul id='navbar' ref={navRef} className='responsiveUL' >
         <div className='solidIcons solidIcons2'>
          <i onClick={showNavbar} className="fa-solid fa-xmark fa-flip"></i>  
         </div>
         <div className='n-li'>
          <li><Link to='/' onClick={()=>OpenActive(1)} className={active === 1 ? "actives" : ""}>{t('Home')}</Link></li>
          <li><Link to='/about' onClick={()=>OpenActive(2)} className={active === 2 ? "actives" : ""}>{t('About us')}</Link></li>
          <li><Link to='/contact' onClick={()=>OpenActive(3)} className={active === 3 ? "actives" : ""}>{t('Contact Us')}</Link></li>
          <li><Link to='/blog' onClick={()=>OpenActive(4)} className={active === 4 ? "actives" : ""}>{t('Blog')}</Link></li>
         </div>
         <div className='n-li n-li-n'>
          <li className='language'>{ il8.language == 'en' && <button onClick={()=> il8.changeLanguage('ar')}><img src={require("../../../images/lang.png")} alt='shape1' />العربية</button> }
           { il8.language == 'ar' && <button onClick={()=> il8.changeLanguage('en')}><img src={require("../../../images/lang2.png")} alt='shape1' />English</button> }
          </li>
          <li><Link to='/login'>{t('Login')}</Link></li>
          <li><Link to='#' className='n-btn'>{t('Start For Free')}</Link></li>
         </div>

       </ul>
      </div>
      <div className='solidIcons'>
       <i onClick={showNavbar} className="fa-solid fa-bars fa-flip"></i>
       <i onClick={showNavbar} className="fa-solid fa-xmark fa-flip"></i>    
      </div>
      </nav>
    </div>
  )
 }

export default Navbar;