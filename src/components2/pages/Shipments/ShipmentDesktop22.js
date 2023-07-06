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



const ShipmentDesktop22 = () => {
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
  const [openShipmentBtn2, setOpenShipmentBtn2] = useState(false);
 


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
              <Link to="/shipments"><button  className='switchBtn'>Shipping Products</button></Link>
              <Link to="/shippingByDimensions"><button>Shipping by dimensions</button></Link>
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

           <div className='selectSwitch'>
            <span>Product <b>*</b> </span>
            <div className="btn-group">
            <button style={{border: "1px solid #bbb" }} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161635-removebg-preview.png")} alt='shape1' />
              Please select Product
            </button>
            <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Sport Kit</a></li>
             <li><a className="dropdown-item" href="#">Sneakers</a></li>
             <li><a className="dropdown-item" href="#">Sport Kit</a></li>
      <Link style={{textDecoration: "none"}} to=""><li onClick={()=> setButtonProduct(true)} className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Product</span></li></Link>
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
                 <div className='rectangleSwitchsBotton'>
                  <div>
                  <div className='potionTtem'>
                  <div className='qtyShipment'><span>Qty <b>*</b></span></div>
                    <div className='switchNumber'>
                    <button className='switchNumber1' disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                    <span className='switchNumberZero'>{options.children}</span>
                    <button className='switchNumber2' onClick={() => handleOption("children", "i")}>+</button>
                    </div>
                   </div>
                  </div>
                  <div className="switchNumberButton">
                   <button onClick={()=>setOpenShipmentBtn(!openShipmentBtn)} className="poupFillBtn">Add shipment</button>
                  </div>
                 </div>
               </div>
              </div>
             </div>

       { openShipmentBtn &&
            <div className='ShipmentDesktopTabel'>
              <div className='shDesTitle'>
               <h4>Shipment Orders List</h4>
               <span> 25 May 2023, 09:41 PM</span>
              </div> 
  
     
              <main className='table'>  
              <div className='table_body'>
               <table>
                <thead className='shipmentDeskHead'>
                 <tr>
                  <th className='boxProduct2'>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
                   <span>Client Name</span>
                  </th>
                  <th className=' '>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
                   <span>Store Name</span>
                  </th>
                  <th className=' '>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183416-removebg-preview.png")} alt='shape1' />
                   <span>Product</span>
                  </th>
                  <th className=' '>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183839-removebg-preview.png")} alt='shape1' />
                   <span> Quantity</span>
                  </th>
                  <th className='  boxProduct3'>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
                   <span>Price</span>
                  </th>
                 </tr> 
                </thead>
                <tbody>
                 <tr>
                  <td>Mishari Al-Dhubyani</td>
                  <td>Golden Joule</td>
                  <td>Athlete Kit</td>
                  <td>5</td>
                  <td>646 SAR</td>
                 </tr>
                 <div className='HRproduct'></div>
                 <tr>
                 <td>Mishari Al-Dhubyani</td>
                 <td>Golden Joule</td>
                 <td>Athlete Kit</td>
                 <td>5</td>
                 <td>646 SAR</td>
                 </tr>
                 <div className='HRproduct'></div>
                 <tr>
                 <td>Mishari Al-Dhubyani</td>
                 <td>Golden Joule</td>
                 <td>Athlete Kit</td>
                 <td>5</td>
                 <td>646 SAR</td>
                 </tr>
                </tbody>
               </table>
              </div>
            </main>
           </div>
        }

        { openShipmentBtn2 && 
          <div className='ShipmentDesktopTabel'>
            <div className='shDesTitle'>
             <h4>Shipment Orders List</h4>
             <span> 25 May 2023, 09:41 PM</span>
            </div> 

   
            <main className='table'>  
            <div className='table_body'>
             <table>
              <thead className='shipmentDeskHead'>
               <tr>
                <th className='boxProduct2'>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
                 <span>Client Name</span>
                </th>
                <th className=' '>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
                 <span>Store Name</span>
                </th>
                <th className=' '>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183416-removebg-preview.png")} alt='shape1' />
                 <span>Product</span>
                </th>
                <th>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161551-removebg-preview.png")} alt='shape1' />
                 <span>Shipping Company</span>
                </th>
                <th className='boxProduct3'></th>
               </tr> 
              </thead>
              <tbody>
               <tr>
                <td>Mishari Al-Dhubyani</td>
                <td>Golden Joule</td>
                <td>Athlete Kit</td>
                <td>
                <div className="dropdown">
                <button style={{border: "1px solid #bbb" }} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
                </td>
                <td>
                <div className="form-check ">
                 <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                 <label className="form-check-label" htmlFor="validationFormCheck1">Cash on delivery</label>
                </div>
                </td>
               </tr>
               <div className='HRproduct'></div>
               <tr>
               <td>Mishari Al-Dhubyani</td>
               <td>Golden Joule</td>
               <td>Athlete Kit</td>
               <td>
               <div className="dropdown">
               <button style={{border: "1px solid #bbb" }} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Dropdown button
               </button>
               <ul className="dropdown-menu ">
                 <li><a className="dropdown-item" href="#">Action</a></li>
                 <li><a className="dropdown-item" href="#">Another action</a></li>
                 <li><a className="dropdown-item" href="#">Something else here</a></li>
                 <li><a className="dropdown-item" href="#">Separated link</a></li>
               </ul>
               </div>
               </td>
               <td>
               <div className="form-check ">
                <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                <label className="form-check-label" htmlFor="validationFormCheck1">Cash on delivery</label>
               </div>
               </td>
               </tr>
               <div className='HRproduct'></div>
               <tr>
               <td>Mishari Al-Dhubyani</td>
                <td>Golden Joule</td>
                <td>Athlete Kit</td>
                <td>
                <div className="dropdown">
                <button style={{border: "1px solid #bbb" }} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                </div>
                </td>
                <td>
                <div className="form-check ">
                 <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                 <label className="form-check-label" htmlFor="validationFormCheck1">Cash on delivery</label>
                </div>
                </td>
               </tr>
              </tbody>
             </table>
            </div>
          </main>
         </div>
        }
        </div>
        { openShipmentBtn2 &&  
       <div>
        <div>
        <h6 style={{color: "#FC746C" , margin: "20px 0"}}>Receive options</h6>
        <div style={{marginLeft: "30px"}} className="form-check mb-3">
         <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
         <label className="form-check-label" htmlFor="validationFormCheck1">Schedule an appointment to receive the package from the company</label>
        </div>
        <div style={{marginLeft: "30px"}} className="form-check mb-3">
         <input type="checkbox" className="form-check-input" id="validationFormCheck2" required />
         <label className="form-check-label" htmlFor="validationFormCheck2">I will be delivering my package at the company's website</label>
        </div>
       </div>
       <div className='boxBlue'>
        <span>The shipment will be picked up by the company's agent, and it is important to prepare the shipment on the specified date. The courier will reach your store between 09:00 AM and 03:00 PM.</span>
       </div>
       <div className='boxYellow'>
        <span>By clicking Proceed to Payment, you agree that if the dimensions and weight of the shipment entered do not match those sent, a price difference will be invoiced.</span>
       </div>
      </div>
        }
            <div className="poupBtn">
             <button onClick={()=>setOpenShipmentBtn2(!openShipmentBtn2)} className="poupFillBtn">Shipping Company</button>
            </div>
          </div>
        </>
    )
}

export default ShipmentDesktop22;
