import React ,{useState} from 'react';
import './MyBills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';

const MyBills = () => {
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
            <h2>My Bills</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> My Bills </p>
          </div>
          <div className='boxShos'>
           <div>
            <div className='topShos'>
             <div className='ProductTop'>
              <h3>My Bills</h3>
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
              <p>Add shipments</p>
             </div>
             </div>
            </div>
            <div className='postgaitProduct'>
             <h6> <span className='myBillSpan'> Your operations </span></h6>
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
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
             <span>Store Name</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161551-removebg-preview.png")} alt='shape1' />
             <span>Shipping Company</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-17_220434-removebg-preview.png")} alt='shape1' />
             <span>Date Request</span>
            </th> 
            <th className='boxProduct boxProduct3'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
             <span>Price</span>
            </th> 
           </tr>
           </thead> 
         

           <tbody className='myBillsTables'>
           <tr>
            <td>Mashari  Al-Dhubiani</td> 
            <td>Golden Joule</td> 
            <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151806-removebg-preview.png")} alt='shape1' /></td> 
            <td>12-03-2023</td> 
            <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
           </tr>
           <div className='HRproduct'> </div>
           <tr >
           <td>Mashari  Al-Dhubiani</td> 
           <td>Golden Joule</td> 
           <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151806-removebg-preview.png")} alt='shape1' /></td> 
           <td>12-03-2023</td> 
           <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Golden Joule</td> 
          <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151806-removebg-preview.png")} alt='shape1' /></td> 
          <td>12-03-2023</td> 
          <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Golden Joule</td> 
          <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151534-removebg-preview.png")} alt='shape1' /></td> 
          <td>12-03-2023</td> 
          <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Golden Joule</td> 
          <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151534-removebg-preview.png")} alt='shape1' /></td> 
          <td>12-03-2023</td> 
          <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr>
          <td>Mashari  Al-Dhubiani</td> 
          <td>Golden Joule</td> 
          <td className='myBillsTableImg'><img src={require("../../../images/لقطة_الشاشة_2023-06-18_151806-removebg-preview.png")} alt='shape1' /></td> 
          <td>12-03-2023</td> 
          <td className='myBillsTableLeft'><span>646 <small>SAR</small> </span><b className='myBillsImg'>Printing<img src={require("../../../images/لقطة_الشاشة_2023-06-18_142304-removebg-preview.png")} alt='shape1' /></b></td> 
          </tr>
         </tbody>
        </table>
       </div>
      </main>
     </div>
    </div>
    </>
    )
}

export default MyBills;