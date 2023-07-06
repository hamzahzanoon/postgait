import React from 'react';

import RecoveryForm from './RecoveryForm';

const Recovery = () => {
  return (
    <div className='regester'>
     <div className='r-regester'>
      <div className='img-regester Recovery'>
       <div className='regester-color'></div>
       <img className='regester-img1' src={require("../../../images/logo-st-removebg-preview.png")} alt='shape1' />
       <h3>Forgot Password</h3>
       <h6>Enter the email address associated</h6>
       <img className='regester-img2' src={require("../../../images/bg34-1.png-removebg-preview.png")} alt='shape1' />
      </div>
      <div>
       <RecoveryForm />
      </div>
     </div>
    </div>
  )
}

export default Recovery;
