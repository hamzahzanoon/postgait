import React , {useState} from 'react';
import './Shops.css';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PopUp from '../../PopUp/PopUp';
import Axios from 'axios';

// const [buttonPopUp, setButtonPopUp] = useState(false)
// <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp}></PopUp>

const Shops = () => {
  const [dataShops , setDataShops] = useState({
    nameStoreShops: "",
    phoneNumberShops: "",
    countryShops: "",
    cityShops: "",
    postalCodeShops: "",
  });

  function handelShops(e) {
     const newdata = {...dataShops}
     newdata[e.target.id] = e.target.value
     setDataShops(newdata)
     console.log(newdata);
  }
  function submit(e) {
    e.preventDefault();
  }


  const [openHeader , setOpenHeader] = useState(false);
  const handelOpenHeader = () => {
      setOpenHeader(true);
     }
   
     const handelClosHeader = () => {
      setOpenHeader(false);
      }


    return (
        <>
        <Headers openHeader={openHeader} handelClosHeader={handelClosHeader}  />
        <Searchs2 openHeader={openHeader} handelOpenHeader={handelOpenHeader}  />
         <div className='homeShops'>
          <div className='homeShops2'>
            <h2>Shops</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Shops </p>
          </div>
          <div className='boxShos'>
           <div>
            <div className='topShos'>
             <div>
              <h3>Shops</h3>
             </div>
             <div className='doard-path2'>
              <i className="fa-solid fa-plus"></i>
              <Link to='/shipments'style={{textDecoration: "none"}} > <p>Add Shipment</p> </Link>
             </div>
            </div>
            <p>We use store addresses and contact details to receive shipments from delivery representatives. Please make sure that the data is correct to facilitate access to you.</p>
           </div>

           <div className='boxShosPath'>
            <form onSubmit={(e)=> submit(e)}>
              <div className='shopContainr'>
               <div className='shopContainr2'>
                 <h5>Name store</h5>
                <div>
                <input onChange={(e)=> handelShops(e)} id="nameStoreShops" value={dataShops.nameStoreShops} name='nameStoreShops' type='text' placeholder='Golden Joule' />
                 <img src={require("../../../images/icon.jpg")} alt='shape1' />
                </div>
               </div>
               <div className='shopContainr2'>
                <h5>Phone Number</h5>
                <div>
                <input onChange={(e)=> handelShops(e)} id="phoneNumberShops" value={dataShops.phoneNumberShops} name='phoneNumberShops' type='text' placeholder='+966 53 337 3122' />
                 <img src={require("../../../images/Call.png")} alt='shape1' />
                </div>
               </div>
              </div>
              <div>
               <h6>Store <span>Address</span> Details</h6>
               </div>
              <div className='shopContainr'>
              
               <div className='shopContainr2'>
                <h5>Country</h5>
               <div>
                <input onChange={(e)=> handelShops(e)} id="countryShops" value={dataShops.countryShops} name='countryShops' type='text' placeholder='Golden Joule' />
                <img src={require("../../../images/لقطة_الشاشة_2023-06-15_125518-removebg-preview.png")} alt='shape1' />
               </div>
              </div>
             
              <div className='shopContainr2'>
               <h5>City</h5>
               <div>
                <input onChange={(e)=> handelShops(e)} id="cityShops" value={dataShops.cityShops} name='cityShops' type='text' placeholder='Golden Joule' />
                 <img src={require("../../../images/20728636901586787995.jpg")} alt='shape1' />
               </div>
              </div>
             </div>
             <div className='shopContainr'>
             <div className='shopContainr2'>
               <h5>Postal Code</h5>
              <div>
               <input onChange={(e)=> handelShops(e)} id="postalCodeShops" value={dataShops.postalCodeShops} name='postalCodeShops' type='text' placeholder='Golden Joule' />
               <img src={require("../../../images/7788745351640926536.jpg")} alt='shape1' />
              </div>
             </div>
              <div className='shopButton'>
               <div className='buttonLeft'>
                <button type='submit'>Edit</button>
                <img src={require("../../../images/لقطة_الشاشة_2023-06-11_134421-removebg-preview.png")} alt='shape1' />
               </div>
               <div>
                <button type='submit'>Delete</button>
                <img src={require("../../../images/لقطة_الشاشة_2023-06-11_134451-removebg-preview.png")} alt='shape1' />
               </div>
              </div>
             </div>
            </form>

            <div className='shopImg'>
             <img src={require("../../../images/Frame-removesbg-preview.png")} alt='shape1' />
            </div>
           </div>
          </div>
         </div>
        </>
    )
}

export default Shops;