import React ,{useState} from 'react';
import './Wallet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from "../../Uitily2/Header/Header";
import Searchs2 from "../../Uitily2/search/Search2";

const Wallet = () => {
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
          <div className='homeShops2'>
            <h2>Wallet</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Wallet </p>
          </div>
          <div className='boxShos'>
           
            <div className='walletTop'> 
             <div>
              <h3>Wallet</h3>
              <div className="walletImg">
               <img src={require("../../../images/لقطة_الشاشة_2023-06-15_141826-removebg-preview.png")} alt='shape1' />
                <span>Wallet balance</span>  
              </div>
             </div>
             <div className="walletNumber">
              <h4>0.00</h4> <span>SAR</span>
             </div>
            </div>

            <div className='settingsBotton walletBotton'>
              <h4> Recharge your account </h4>
              <span>We support Mastercard, Visa, American Express and Mada.</span>
             <div className="settingsInputs">
              <div className="settingsInput walletInput">
               <input type="text" placeholder="Enter the amount for shipping" />
               <span>SAR</span>
              </div>
              <div className="settingImg">
               <img src={require("../../../images/Group 59.jpg")} alt='shape1' />
              </div>
             </div>
            </div>

            <div className="walletTitle">
             <h4>payment due</h4>
            </div>
            <div>
            <main className='table'>
            <div className='table_body'> 
            <table>
            <thead className="walletsSpanss">
            <tr>
             <th className='walletsSpans boxProduct2'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
              <span>Store Name</span>
             </th>
             <th className='walletsSpans'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161635-removebg-preview.png")} alt='shape1' />
              <span>Name Product</span>
             </th> 
             <th className='walletsSpans'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161551-removebg-preview.png")} alt='shape1' />
              <span>Shipping Company</span>
             </th> 
             <th className='walletsSpans'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
              <span>Shipment Address</span>
             </th> 
             <th className='walletsSpans'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-17_220434-removebg-preview.png")} alt='shape1' />
              <span>Date Request</span>
             </th> 
             <th className='walletsSpans boxProduct3'>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
              <span>Amount due</span>
             </th> 
            </tr>
            </thead> 
          
 
            <tbody>
            <tr>
             <td>Golden Joule</td> 
             <td>Sneakers</td> 
             <td><img src={require("../../../images/screencapture-postgait-shipments-2023-04-13-21_46_51.jpg")} alt='shape1' /></td> 
             <td>Free Jabal Al-Nour,Saudi Arabia</td> 
             <td>12-03-2023</td> 
             <td>646 SAR</td> 
            </tr>
            <div className='HRproduct'> </div>
            <tr>
             <td>Golden Joule</td> 
             <td>Sneakers</td> 
             <td><img src={require("../../../images/screencapture-postgait-shipments-2023-04-13-21_46_51.jpg")} alt='shape1' /></td> 
             <td>Free Jabal Al-Nour,Saudi Arabia</td> 
             <td>12-03-2023</td> 
             <td>646 SAR</td> 
            </tr>
            <div className='HRproduct'> </div>
            <tr>
             <td>Golden Joule</td> 
             <td>Sneakers</td> 
             <td><img src={require("../../../images/screencapture-postgait-shipments-2023-04-13-21_46_51.jpg")} alt='shape1' /></td> 
             <td>Free Jabal Al-Nour,Saudi Arabia</td> 
             <td>12-03-2023</td> 
             <td>646 SAR</td> 
            </tr>
          </tbody>
         </table>
        </div>
       </main>
            </div>
             
           </div>
          </div>
        
        </>
    )
}

export default Wallet;