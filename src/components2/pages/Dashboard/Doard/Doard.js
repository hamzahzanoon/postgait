import React from 'react';
import './Doard.css';



const Doard = () => {
    return(
      <div className='doard'>
        <div className='doard-path'>
         <div>
          <h3>Dashboard</h3>
          <p>Home</p>
         </div>
       
         <div className='doard-path2'>
          <i className="fa-solid fa-plus"></i>
          <p>Add Shipment</p>
         </div>
        </div>
     </div> 
    )
}

export default Doard;