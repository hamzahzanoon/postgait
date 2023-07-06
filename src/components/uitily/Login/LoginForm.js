import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isChecked, setIsChecked] = useState(false);
  
   function login(e) {
      e.preventDefault();
    console.log({email , password});
   }
  
    // const handleSwitchChange = () => {
    //   setIsChecked(!isChecked);
    // };
  
    return (
    <div className='regesterform loginForm'>
     <h3>Sign In to</h3>
     <h2>POSTGAIT</h2>
      <form  className="my-form"> {/* تطبيق الكلاس الخاص بتنسيق النموذج */}

        <label>
          <input type="email" value={email} className='inputform' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' required />
        </label>
        <br /><br />
        <label>
          <input type="password" value={password} className='inputform' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        </label>
        <br /><br />
        <h5> <a href='/Recovery'>Password Recovery</a> </h5>
        
        <input type="submit" value="Signup" onClick={login} className='inputform inputform-4' />
      </form>
       <div className='orform'>
        <p>Or</p>
       </div>
       <h5>Don't have an account?<a href='/Regester'>Signup Free!</a> </h5>
    </div>
  );
}

export default LoginForm;
