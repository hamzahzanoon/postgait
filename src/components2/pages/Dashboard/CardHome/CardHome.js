import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardHome.css';


const CardHome = () => {
  return (
    <div className='card-main'>
     <Card className='card-main-prodact' style={{ width: '90%'}}>
      <div className='h-box'>
       <div className='h-box-left'>
        <div className='div-icon'> <p>Totol Clients</p></div>
         <div className='box-namber'>
          <h4>35</h4>
          <hr />
          <p className='child-les'> <span>+5%</span> than yesterday </p>
        </div>
      </div>
      <div>
       <img className='child-img' src={require("../../../../images/Frame-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Card>

    <Card className='card-main-prodact' style={{ width: '90%'}}>
      <div className='h-box'>
       <div className='h-box-left'>
        <div className='div-icon'> <p>Shipments per month</p></div>
         <div className='box-namber'>
          <h4>15</h4>
          <hr />
          <p className='child-les'> <span>+5%</span> than yesterday </p>
        </div>
      </div>
      <div>
       <img className='child-img' src={require("../../../../images/Artboard_36-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Card>

    <Card className='card-main-prodact' style={{ width: '90%'}}>
      <div className='h-box'>
       <div className='h-box-left'>
        <div className='div-icon'> <p>Total Shipments</p></div>
         <div className='box-namber'>
          <h4>25</h4>
          <hr />
          <p className='child-les'> <span>+5%</span> than yesterday </p>
        </div>
      </div>
      <div>
       <img className='child-img' src={require("../../../../images/Frame2-removebg-preview.png")} alt='shape1' />
      </div>
     </div>
    </Card>
    </div>
  );
};

export default CardHome;
