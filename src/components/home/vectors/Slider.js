import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css';
import { useTranslation } from 'react-i18next';

const SimpleSlider = () => {
  const [t , il8] = useTranslation();
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
    return (
      <div className="slider-container mb-5">
       <div>
       <div className='title'>
        <h1 style={{color: "#FC746C"}}>{t('Customer Reviews')}</h1>
        <p>{t('We are proud that we create a profitable business for our clients, and strive to always provide the best.')}</p>
       </div>
        <Slider className="slider" {...settings}>
          <div>
          <div className="n-slider">
           <div>
            <p>{t('After this pandemic that has affected the world, you were able to adhere to delivery dates and follow up on orders, and thank you very much and forward')}</p>
           </div>
           <div className="s-slider">
             <div className="s-slider-left">
              <img src={require("../../../images/Screenshot 2023-05-20 181248.png")} alt='shape1' />
             </div>
             <div className="s-star">
               <h1 style={{color: "#FC746C" , fontSize: "20px"}}>{t('Naif Alotaiby')}</h1>
               <div className="star">
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
               </div>
             </div>
             <div>
              <img style={{width: "50px" , height: "50px" , marginTop: "50px"}} src={require("../../../images/Layer_1.jpg")} alt='shape1' />
             </div>
           </div>
           </div>
           </div>
           <div className="n-slider">
           <div>
            <p>{t('After this pandemic that has affected the world, you were able to adhere to delivery dates and follow up on orders, and thank you very much and forward')}</p>
           </div>
           <div className="s-slider">
             <div className="s-slider-left">
              <img src={require("../../../images/Screenshot 2023-05-20 181248.png")} alt='shape1' />
             </div>
             <div className="s-star">
               <h1 style={{color: "#FC746C" , fontSize: "20px"}}>{t('Naif Alotaiby')}</h1>
               <div className="star">
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
               </div>
             </div>
             <div>
              <img style={{width: "50px" , height: "50px" , marginTop: "50px"}} src={require("../../../images/Layer_1.jpg")} alt='shape1' />
             </div>
           </div>
           </div>
           <div className="n-slider">
           <div>
            <p>{t('After this pandemic that has affected the world, you were able to adhere to delivery dates and follow up on orders, and thank you very much and forward')}</p>
           </div>
           <div className="s-slider">
             <div className="s-slider-left">
              <img src={require("../../../images/Screenshot 2023-05-20 181248.png")} alt='shape1' />
             </div>
             <div className="s-star">
               <h1 style={{color: "#FC746C" , fontSize: "20px"}}>{t('Naif Alotaiby')}</h1>
               <div className="star">
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
               </div>
             </div>
             <div>
              <img style={{width: "50px" , height: "50px" , marginTop: "50px"}} src={require("../../../images/Layer_1.jpg")} alt='shape1' />
             </div>
           </div>
           </div>
           <div className="n-slider">
           <div>
            <p>{t('After this pandemic that has affected the world, you were able to adhere to delivery dates and follow up on orders, and thank you very much and forward')}</p>
           </div>
           <div className="s-slider">
             <div className="s-slider-left">
              <img src={require("../../../images/Screenshot 2023-05-20 181248.png")} alt='shape1' />
             </div>
             <div className="s-star">
               <h1 style={{color: "#FC746C" , fontSize: "20px"}}>Naif Alotaiby</h1>
               <div className="star">
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
                <img src={require("../../../images/Vector.jpg")} alt='shape1' />
               </div>
             </div>
             <div>
              <img style={{width: "50px" , height: "50px" , marginTop: "50px"}} src={require("../../../images/Layer_1.jpg")} alt='shape1' />
             </div>
           </div>
           </div>
        </Slider>
       </div>
      </div>
    );

}

export default SimpleSlider;