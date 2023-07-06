import React from 'react';
import './Regester.css';
import RegesterForm from './RegesterForm';

const Regester = () => {
  return (
    <div className='regester'>
     <div className='r-regester'>
      <div className='img-regester'>
       <div className='regester-color'></div>
       <img className='regester-img1' src={require("../../../images/preview.png")} alt='shape1' />
       <h3>Manage your shipments in a practical way with <span>Postgait</span> </h3>
       <img className='regester-img2' src={require("../../../images/bg34-2.png-removebg-preview.png")} alt='shape1' />
      </div>
      <div>
       <RegesterForm />
      </div>
     </div>
    </div>
  )
}

export default Regester;
