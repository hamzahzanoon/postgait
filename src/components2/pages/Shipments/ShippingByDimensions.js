import React ,{useEffect, useState} from 'react';
import './Shipment.css';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PopUp from '../../PopUp/PopUp';
import { Link } from 'react-router-dom';
import Client from '../../PopUp/AddClient';
import AddProduct from '../../PopUp/AddProduct';



const ShippingByDimensions = () => {
  const [buttonPages, setButtonPages] = useState(false);
  const [buttonClient, setButtonClient] = useState(false);
  const [buttonProduct, setButtonProduct] = useState(false);

  const [options , setOptions] = useState({
      children: 0,
  });

  const handleOption = (name , operation) => {
      setOptions((prev) => {
          return {
              ...prev,
              [name]: operation === "i" ? options[name] + 1 : options[name] - 1
          };
      });
  };

  const [openShipmentBtn, setOpenShipmentBtn] = useState(false);
 



  const [openHeader , setOpenHeader] = useState(false);
  const handelOpenHeader = () => {
      setOpenHeader(true);
     }
     const handelClosHeader = () => {
      setOpenHeader(false);
      }
 
    return (
        <>
        <PopUp trigger={buttonPages} setTrigger={setButtonPages}></PopUp>
        <Client client={buttonClient} setClient={setButtonClient}></Client>
        <AddProduct product={buttonProduct} setProduct={setButtonProduct}></AddProduct>
        <Headers openHeader={openHeader} handelClosHeader={handelClosHeader} />
        <Searchs2 openHeader={openHeader} handelOpenHeader={handelOpenHeader} />
         <div className='homeShops'>
          <div className='homeShipmentTop'>
           <div className='homeShops2 homeShops3'>
            <h2>shipments</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> shipments </p>
           </div>
           <div className='ProductshipmentInput'>
            <input type='text' placeholder='Search for the shipment...' />
            <FontAwesomeIcon className='shipmentFaMagniIcon' icon={faMagnifyingGlass} />
           </div>
          </div>

          <div className='boxShos'>
            <div className='topShosSwitch'>
             <h5>Please select shipping method</h5>
              <div  className='switch'>
              <Link to="/shipments" style={{textDecoration: "none"}}><button style={{color: "#4F4F4F"}}>Shipping Products</button></Link>
              <Link to="/shippingByDimensions" style={{textDecoration: "none"}}><button className='switchBtn'>Shipping by dimensions</button></Link>
             </div>
            </div>
           

        <div className='boxShosPath2 boxSwitch'>
          <h3>Your shipment with <span>us safely</span> ship everywhere..!!</h3>
         <div className='boxCeanterSwitch'>
         
          <div>
           <div className='selectSwitch'>
            <span>Store <b>*</b> </span>
            <div className="btn-group">
            <button style={{border: "1px solid #bbb" }} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
              Please select Store
            </button>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Golden Joule</a></li>
             <li><a className="dropdown-item" href="#">Sports World</a></li>
             <li><a className="dropdown-item" href="#">Sports Fashion</a></li>
             <li><a className="dropdown-item" href="#">Golden Joule</a></li>
             <li><a className="dropdown-item" href="#">Sports World</a></li>
     <Link style={{textDecoration: "none"}} to=""><li onClick={()=> setButtonPages(true)}  className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Product</span></li></Link>
            </ul>
           </div>
          </div>

           <div className='selectSwitch'>
            <span>Client <b>*</b> </span>
            <div className="btn-group">
            <button style={{border: "1px solid #bbb" }} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
              Please select Client
            </button>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Abdulrahman Qutb</a></li>
             <li><a className="dropdown-item" href="#">Nawaf Sarih Alissa</a></li>
             <li><a className="dropdown-item" href="#">Manar Hassan Al , Shaqaq</a></li>
             <li><a className="dropdown-item" href="#">Abdulrahman Alghannam</a></li>
             <li><a className="dropdown-item" href="#">Nawaf Sarih Alissa</a></li>
  <Link style={{textDecoration: "none"}} to=""><li onClick={()=> setButtonClient(true)} className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Product</span></li></Link>
            </ul>
           </div>
          </div>


         </div>

              <div className='boxLeftCSwitch'>
               <div className='boxLeftCSwitchParth'>
                <span>Store Details</span>
                <div className='rectangleSwitchs'>
                 <div><p>Address</p><p><img src={require("../../../images/لقطة_الشاشة_2023-06-20_162609-removebg-preview.png")} alt='shape1' />Badr Dist., Dammam, Saudi Arabia</p></div>
                 <div><p>Mobile</p><p><img src={require("../../../images/لقطة_الشاشة_2023-06-20_162756-removebg-preview.png")} alt='shape1' />+966 56 157 7438</p></div>
                </div>
               </div>
               <div className='boxLeftCSwitchParth'>
                <span>Store Client</span>
                <div className='rectangleSwitchs'>
                 <div><p>Address</p><p><img src={require("../../../images/لقطة_الشاشة_2023-06-20_162609-removebg-preview.png")} alt='shape1' />Badr Dist., Dammam, Saudi Arabia</p></div>
                 <div><p>Mobile</p><p><img src={require("../../../images/لقطة_الشاشة_2023-06-20_162756-removebg-preview.png")} alt='shape1' />+966 56 157 7438</p></div>
                </div>
               </div>
              </div>
             </div>

             <div>
             <h6 className="fillAddress">Shipment Details <small>(Length, Height, Width)</small></h6>  
             <div className="colorFill">
              <div className="colorFillPart colorFillPart3">
               <span>Length<b>*</b></span>
               <input type="text" placeholder="Please select Client" />
               <img src={require("../../../images/لقطة_الشاشة_2023-06-10_222348-removebg-preview.png")} alt='shape1' />
               </div>
              <div className="colorFillPart colorFillPart3">
               <span>Height<b>*</b></span>
               <input type="text" placeholder="Please select Client" />
               <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183639-removebg-preview.png")} alt='shape1' />
              </div>
              <div className="colorFillPart colorFillPart3">
              <span>Width<b>*</b></span>
              <input type="text" placeholder="Please select Client" />
              <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183718-removebg-preview.png")} alt='shape1' />
             </div>
            </div>
           </div>
             <div className="poupBtn">
              <button style={{textAlign: "center"}} className="poupFillBtn">Add shipment</button>
             </div>
            </div>
           </div>
    
            <div className="poupBtn">
             <button style={{textAlign: "center"}} className="poupFillBtn">Shipping Company</button>
            </div>
          </div>
        </>
    )
}

export default ShippingByDimensions;


