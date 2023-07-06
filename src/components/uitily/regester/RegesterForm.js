import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegesterForm() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [option, setOption] = useState('');
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // يمكنك هنا إجراء الإجراءات المناسبة بناءً على المدخلات المقدمة
      console.log('تم إرسال النموذج!');
    };
  
    const handleSwitchChange = () => {
      setIsChecked(!isChecked);
    };
  
    return (
    <div className='regesterform'>
     <h3>Sign Up to</h3>
     <h2>POSTGAIT</h2>
      <form onSubmit={handleSubmit} className="my-form"> {/* تطبيق الكلاس الخاص بتنسيق النموذج */}
        <label>
          <input type="text" value={firstname} className='inputform' onChange={(e) => setFirstname(e.target.value)} placeholder='First Name' required />
        </label>
        <br /><br />
        
        <label>
          <input type="text" value={lastname} className='inputform' onChange={(e) => setLastname(e.target.value)} placeholder='Last Name' required />
        </label>
        <br /><br />
        
        <label>
          <input type="email" value={email} className='inputform' onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        </label>
        <br /><br />
        
        <label className='labelselect'>
          <select value={option} onChange={(e) => setOption(e.target.value)} >
            <option value="1">+966</option>
            <option value="2">+967</option>
            <option value="3">+968</option>
            <option value="4">+969</option>
          </select>
          <input type="text" value={email} className='inputform-2 inputform-5' onChange={(e) => setText(e.target.value)} placeholder='5x xxx xxxx' required />
          </label>
        <br /><br />
        
        <label>
          <input type="password" value={password} className='inputform' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        </label>
        <br /><br />
  
        <label>
        <input type="checkbox" checked={isChecked} className='inputform-3' onChange={handleSwitchChange} />
        I agree with <span>Terms</span> and <span>Privacy Policy</span> 
        </label>
        <br /><br />
        
        <input type="submit" value="Signup" className='inputform inputform-4' />
      </form>
       <div className='orform'>
        <p>Or</p>
       </div>
       <h5>Already have an account? <Link to='/login'>Login</Link> </h5>
    </div>
  );
}

export default RegesterForm;
