import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='regester'>
     <div className='r-regester'>
      <div className='img-regester'>
       <div className='regester-color'></div>
       <img className='regester-img1' src={require("../../../images/preview.png")} alt='shape1' />
       <img className='regester-img2' src={require("../../../images/bg34-1.png-removebg-preview.png")} alt='shape1' />
      </div>
      <div>
       <LoginForm />
      </div>
     </div>
    </div>
  )
}

export default Login;
