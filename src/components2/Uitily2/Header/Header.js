import React, { useState } from 'react';
import './Headers.css';
import { Link } from 'react-router-dom';



const Headers = ({openHeader , handelClosHeader , Children}) => {

  const [product, setProduct] = useState(false);
  const [product2, setProduct2] = useState(false);
  const [product3, setProduct3] = useState(false);
  
  
  const [active, setActive] = useState(1);
  const OpenActive = (index) => {
    setActive(index);
  }




  return (
    <div className={openHeader ? 'navs-headers' : ""} id='nav-header'>
     <ul >
       <div className='logos'>

       <Link to='/'>
        <img className='img-logo' src={require("../../../images/presview.png")} alt='shape1' />
        </Link>
        <div className='hCH'>
         <i onClick={()=> handelClosHeader()}  className="fa-solid fa-xmark fa-flip"></i>  
        </div>
       </div>
       <div>
       <div className='n-center'>
       <div>
       <Link to='/dashboard' name="Dashboard" onClick={()=>OpenActive(1)} className={active === 1 ? "n-main active" : "n-main"}>
        <li style={{display: "flex"}}>
         <i className="fa-solid fa-house"></i> 
         <span>Dashboard</span>
         </li>
        </Link>

        <Link to='/shops' style={{color: "#144339"}}>
        <li onClick={()=>OpenActive(2)} className={active === 2 ? "n-main n-left  active" : "n-main n-left"}>
          <div className='main-icone'>
           <i className="fa-solid fa-shop"></i>
           <span> Shops</span>
          </div>
         
      { product && <ul className="dropDown">
           <li className="dropDownPath"><Link to="/products">Product</Link></li>
           <li className="dropDownPath"><Link to="/classifications">Classifications</Link></li>
          </ul>}
          <div className='n-ico'>
           <i onClick={()=>setProduct(!product)} style={{cursor: 'pointer'}} className="fa-solid fa-chevron-right"></i>
          </div>
        </li>
        </Link>

        <Link to='/shipments' style={{color: "#144339"}}>
        <li onClick={()=>OpenActive(3)} className={active === 3 ? "n-main n-left active" : "n-main n-left"}>
          <div className='main-icone'>
          <i style={{color: "#fd9e98"}} className="fa-solid fa-truck-fast"></i>
            <span>Shipments</span>
          </div>
         
      { product2 && <ul className="dropDown dropDown2">
          <li className="dropDownPath"><Link to="/customer">Customer</Link></li>
         </ul>}
          <div className='n-ico'>
           <i onClick={()=>setProduct2(!product2)} style={{cursor: 'pointer'}} className="fa-solid fa-chevron-right"></i>
          </div>
        </li>
        </Link>

        <li onClick={()=>OpenActive(4)} className={active === 4 ? "n-main n-left active" : "n-main n-left"}>
        <Link to='/wallet'>
         <div className='main-icone'>
          <i className="fa-solid fa-wallet"></i>
           <span style={{color: "#4f726a"}}>Wallet</span>
         </div>
         </Link>
     { product3 && <ul className="dropDown">
         <li className="dropDownPath"><Link to="/bankAccounts">Bank Accounts</Link></li>
         <li className="dropDownPath"><Link to="/paymentMethods">PaymentMethods</Link></li>
        </ul>}
         <div className='n-ico'>
          <i onClick={()=>setProduct3(!product3)} style={{cursor: 'pointer'}} className="fa-solid fa-chevron-right"></i>
         </div>
        </li>

        <Link to='/mybills' name="My Bills" className='nav-links'  >
         <li onClick={()=>OpenActive(5)} className={active === 5 ? "n-main active" : "n-main"}>
          <i className="fa-solid fa-money-bill"></i>
           <span>My Bills</span>
         </li>
        </Link>

       
         <Link to='/settings' name="Settings" className='nav-links'>
          <li  onClick={()=>OpenActive(6)} className={active === 6 ? "n-main active" : "n-main"}>
           <i className="fa-solid fa-sliders"></i>
           <span>Settings</span>
          </li>
         </Link>

         </div>
         <Link to='#' name="Settings" className='nav-links'>
           <li onClick={()=>OpenActive(7)} className={active === 7 ? "n-main active" : "n-main"}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
           <span>Sign out</span>
           </li>
         </Link>

        </div>
       </div>
       </ul>
       <main>{Children}</main>
    </div>
)
}

export default Headers;