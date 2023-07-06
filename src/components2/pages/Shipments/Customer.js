import React ,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import Paginations from '../Shops/Pagination';

const Customer = () => {
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
            <h2>shipments</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> shipments <FontAwesomeIcon icon={faChevronRight} /> Customer </p>
          </div>
          <div className='boxShos'>
           <div>
            <div className='topShos'>
             <div className='ProductTop'>
              <h3>Customer</h3>
              <input type='text' placeholder='Search for the Product...' />
              <FontAwesomeIcon className='faMagnifyingGlass' icon={faMagnifyingGlass} />
             </div>
             <div  className='ProductTop'>
              <div className='ProductVector'>
               <FontAwesomeIcon className='faFilter' icon={faFilter} />
               <span>Filter</span>
              </div>
              <div className='doard-path2'>
              <i className="fa-solid fa-plus"></i>
              <p>Add Product</p>
             </div>
             </div>
            </div>
            <div className='postgaitProduct'>
             <h6> <span className='productSpan'>We use customer data </span>(personal details and address details) to know their addresses and ways to communicate with them to facilitate delivery of orders. Please check the following details before adding customers:</h6>
             <h6 className='customerIdentification'>In the absence of a city or district, you can add new records. When adding a new city or district, it is necessary that the name be in English.</h6>
           
             </div>
           </div>

           <main className='table'>
           <div className='table_body'> 
           <table>
           <thead>
           <tr>
            <th className='boxProduct boxProduct2'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
             <span>Name customer</span>
            </th>
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174224-removebg-preview.png")} alt='shape1' />
             <span>E-mail</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174250-removebg-preview.png")} alt='shape1' />
             <span>Phone Number</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174441-removebg-preview.png")} alt='shape1' />
             <span>City</span>
            </th> 
            <th className='boxProduct boxProduct3'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
             <span>Customer Address</span>
            </th> 
           </tr>
           </thead> 
         

           <tbody className='customerBody'>
           <tr>
           <td>Mashari  Al-Dhubiani</td> 
           <td>Mashari@gmail.com</td> 
           <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
           <td>Makkah Al-Mukarramah</td> 
           <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
           </tr>
           <div className='HRproduct'> </div>
           <tr >
           <td>Mashari  Al-Dhubiani</td> 
           <td>Mashari@gmail.com</td> 
           <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
           <td>Makkah Al-Mukarramah</td> 
           <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Mashari@gmail.com</td> 
          <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
          <td>Makkah Al-Mukarramah</td> 
          <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Mashari@gmail.com</td> 
          <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
          <td>Makkah Al-Mukarramah</td> 
          <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Mashari@gmail.com</td> 
          <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
          <td>Makkah Al-Mukarramah</td> 
          <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Mashari@gmail.com</td> 
          <td><b className='customerNumber'>+966</b>+966 53 337 3122</td> 
          <td>Makkah Al-Mukarramah</td> 
          <td>Free Jabal Al-Nour,Saudi Arabia<b className='bodyProductSpans'>...</b></td> 
          </tr>
         </tbody>
        </table>
       </div>
      </main>
      <Paginations />
     </div>
    </div>
    </>
    )
}

export default Customer;

