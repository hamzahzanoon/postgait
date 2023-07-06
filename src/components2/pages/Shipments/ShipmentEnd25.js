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
import * as RadioGroup from '@radix-ui/react-radio-group';




const ShipmentEnd25 = () => {
  const [openHeader , setOpenHeader] = useState(false);
  const handelOpenHeader = () => {
      setOpenHeader(true);
     }
     const handelClosHeader = () => {
      setOpenHeader(false);
      }
 
 
    return (
        <>
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
            
           

             <div className='boxShosPath2 boxSwitch'>
              <div className='shipmentEndTop'>
               <div className='shipmentEndBath'>
                <h6>Golden Joule</h6>
                <p>
                <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
                 Badr Dist., Dammam, Saudi Arabia</p>
                 <span>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174250-removebg-preview.png")} alt='shape1' />
                 +966 56 157 7438</span>
                </div>
               <div className='shipmentEndImg'>
                <img src={require("../../../images/Clip_path_group__1_-removebg-preview.png")} alt='shape1' />
               </div>
               <div className='shipmentEndBath'>
                <h6>Mishari Al-Dhubyani</h6>
                <p>
                <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
                 Badr Dist., Dammam, Saudi Arabia</p>
                 <span>
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174250-removebg-preview.png")} alt='shape1' />
                 +966 56 157 7438</span>
                </div>
              </div>   
             </div>

     
            <div className='shipmentDesktopTabel'>
              <div className='shDesTitle'>
               <h4>Shipment Orders List</h4>
               <span> 25 May 2023, 09:41 PM</span>
              </div> 
              <main className='table'>  
              <div className='table_body'>
               <table>
                <thead className='ShipmentEnd25Head'>
                 <tr>
                  <th className='boxProduct2'>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
                   <span>Client Name</span>
                  </th>
                  <th>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
                   <span>Store Name</span>
                  </th>
                  <th>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183416-removebg-preview.png")} alt='shape1' />
                   <span>Product</span>
                  </th>
                  <th>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183839-removebg-preview.png")} alt='shape1' />
                   <span> Quantity</span>
                  </th>
                  <th>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
                   <span>Price</span>
                  </th>
                  <th className='boxProduct3'>
                   <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161551-removebg-preview.png")} alt='shape1' />
                   <span>Shipping cost</span>
                  </th>
                 </tr> 
                </thead>
                <tbody>
                 <tr>
                  <td>Mishari Al-Dhubyani</td>
                  <td>Golden Joule</td>
                  <td>Athlete Kit</td>
                  <td>5</td>
                  <td>646 <small>SAR</small></td>
                  <td>10<small>SAR</small></td>
                 </tr>
                 <div className='HRproduct'></div>
                 <tr>
                 <td>Mishari Al-Dhubyani</td>
                 <td>Golden Joule</td>
                 <td>Athlete Kit</td>
                 <td>5</td>
                 <td>646 <small>SAR</small></td>
                 <td>56 <small>SAR</small></td>
                 </tr>
                 <div className='HRproduct'></div>
                 <tr>
                 <td>Mishari Al-Dhubyani</td>
                 <td>Golden Joule</td>
                 <td>Athlete Kit</td>
                 <td>5</td>
                 <td>646 <small>SAR</small></td>
                 <td>146 <small>SAR</small></td>
                 </tr>
                </tbody>
               </table>
              </div>
            </main>
             <div className='bodyNum'>
              <p>Total</p>
              <p>370 SAR</p>
             </div>
           </div>

           <div className='shipmentDesktopTabel'>
            <h4>Shipment Orders List</h4>
            
            <form>
            <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
            <div className='shipmentDesktBotton'>
 
              <div className='radioGroup1' style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="shipmentTchoss" htmlFor="r2">
                 <div>Balance</div>
                 <div>370 SAR</div>
                </label>
              </div>
              <div className='radioGroup1' style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
                  <RadioGroup.Indicator className="RadioGroupIndicator" />
                </RadioGroup.Item>
                <label className="shipmentTchoss" htmlFor="r3">
                <div>Balance</div>
                <div><img src={require("../../../images/لقطة_الشاشة_2023-06-21_222037-removebg-preview.png")} alt='shape1' /></div>
                </label>
              </div>
              </div>
            </RadioGroup.Root>
          </form>


           </div>
            
           <div className="poupBtn">
            <button style={{textAlign: "center"}} className="poupFillBtn">Add customer</button>
            <button style={{textAlign: "center"}}>Cancel order</button>
           </div>
        </div>

          </div>
        </>
    )
}

export default ShipmentEnd25;

// <div className='shipmentDesktBottonPath'>
// <div className="form-check mb-3">
// <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
// <label class="form-check-label" htmlFor="flexRadioDefault2">Balance</label>
// </div>
// <div>
//  <span>370 SAR</span>
// </div>
// </div>

// <div className='shipmentDesktBottonPath'>
// <div className="form-check mb-3">
// <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
// <label class="form-check-label" htmlFor="flexRadioDefault2">Credit Card</label>
// </div>
// <div>
//  <img src={require("../../../images/لقطة_الشاشة_2023-06-21_222037-removebg-preview.png")} alt='shape1' />
// </div>
// </div>