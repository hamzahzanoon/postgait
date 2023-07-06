import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RecoveryForm() {
    const [email, setEmail] = useState('');
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
    <div className='regesterform RecoveryForm'>
     <h3>Your Email</h3>
      <form onSubmit={handleSubmit} className="my-form"> {/* تطبيق الكلاس الخاص بتنسيق النموذج */}

        <label>
          <input type="email" value={email} className='inputform' onChange={(e) => setEmail(e.target.value)} placeholder='enter your Email' required />
        </label>
        <br /><br />

        
        <input type="submit" value="Signup" className='inputform inputform-4' />
      </form>
       <h5>Return to?<Link to='/login'>Login</Link> </h5>
    </div>
  );
}

export default RecoveryForm;
