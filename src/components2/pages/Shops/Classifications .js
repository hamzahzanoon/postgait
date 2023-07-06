import React , {useState} from 'react';
import './Shops.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import Paginations from './Pagination';

const Classifications = () => {
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
            <h2>Shops</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Shops <FontAwesomeIcon icon={faChevronRight} /> Classifications </p>
          </div>
          <div className='boxShos'>
           <div>
            <div className='topShos'>
             <div className='ProductTop cit'>
              <h3>Classifications</h3>
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
              <p>Add Classifications</p>
             </div>
             </div>
            </div>
           </div>

           <main className='table'>
           <div className='table_body'> 
           <table>
           <thead>
           <tr>
            <th className='classificatio boxProduct2'>
            <span>
            <img src={require("../../../images/لقطة_الشاشة_2023-06-11_225936-removebg-preview.png")} alt='shape1' />
             Name classification</span>
            </th>
            <th className='classificatio'>
            <span>
            <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230028-removebg-preview.png")} alt='shape1' />
             Main classification</span>
            </th> 
            <th className=''>
             <span className='delete'> Delete </span>
            </th> 
            <th className='boxProduct3'>
             <span className='edit'> Edit  </span>
            </th>
            </tr> 
           </thead>
           
           <tbody>
         
           
            <tr className='classificatio'>
             <td>Sneakers</td> 
             <td> Sneakers </td> 
             <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230104-removebg-preview.png")} alt='shape1' /> </td> 
             <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230132-removebg-preview.png")} alt='shape1' /> </td> 
            </tr>
            <div className='HRproduct'> </div>
         
          
           <tr className='classificatio'>
           <td>Sneakers</td> 
           <td> Sneakers </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230104-removebg-preview.png")} alt='shape1' /> </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230132-removebg-preview.png")} alt='shape1' /> </td> 
          </tr>
           <div className='HRproduct'> </div>
          
           
           <tr className='classificatio'>
           <td>Sneakers</td> 
           <td> Sneakers </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230104-removebg-preview.png")} alt='shape1' /> </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230132-removebg-preview.png")} alt='shape1' /> </td> 
          </tr>
           <div className='HRproduct'> </div>
           
         
           <tr className='classificatio'>
           <td>Sneakers</td> 
           <td> Sneakers </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230104-removebg-preview.png")} alt='shape1' /> </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230132-removebg-preview.png")} alt='shape1' /> </td> 
          </tr>
           <div className='HRproduct'> </div>
         
          
           <tr className='classificatio'>
           <td>Sneakers</td> 
           <td className='bodyLeft bodyLeft2'> Sneakers </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230104-removebg-preview.png")} alt='shape1' /> </td> 
           <td> <img src={require("../../../images/لقطة_الشاشة_2023-06-11_230132-removebg-preview.png")} alt='shape1' /> </td> 
          </tr>
         
        <div>
       </div>
       
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

export default Classifications ;






