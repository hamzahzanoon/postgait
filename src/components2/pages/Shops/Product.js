import React ,{useState} from 'react';
import './Shops.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import Paginations from './Pagination';

const Products = () => {
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
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Shops <FontAwesomeIcon icon={faChevronRight} /> Product </p>
          </div>
          <div className='boxShos'>
           <div>
            <div className='topShos'>
             <div className='ProductTop'>
              <h3>Product</h3>
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
             <h6> <span className='productSpan'> POSTGAIT </span> enables you to save your productS TO make it easier to manage shipments. in order for the calculation of shipping costs to be accurate, please observe accuracy in entering the dimensions and weight of the product.</h6>
            </div>
           </div>

           <main className='table'>
           <div className='table_body'> 
           <table>
           <thead className='productsHead'>
           <tr>
            <th className='boxProduct boxProduct2'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183416-removebg-preview.png")} alt='shape1' />
             <span>Name Product</span>
            </th>
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-10_222348-removebg-preview.png")} alt='shape1' />
             <span>Length</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183558-removebg-preview.png")} alt='shape1' />
             <span> weightt</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183639-removebg-preview.png")} alt='shape1' />
             <span>Height</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183718-removebg-preview.png")} alt='shape1' />
             <span>Width</span>
            </th> 
            <th className='boxProduct'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
             <span>Price</span>
            </th> 
            <th className='boxProduct boxProduct3'>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-11_183839-removebg-preview.png")} alt='shape1' />
             <span>Quantity</span>
            </th>
           </tr>
           </thead> 
         

           <tbody>
           <tr className='productSpans'>
            <td>Sneakers</td> 
            <td>5 <span>(CM)</span> </td> 
            <td>5 <span>(kg)</span> </td> 
            <td>5 <span>(CM)</span> </td> 
            <td>5 <span>(CM)</span> </td> 
            <td>5 <span>(SAR)</span> </td> 
            <td> 5 <b className='bodyProductSpan'>...</b> </td> 
           </tr>
           <div className='HRproduct'> </div>
           <tr className='productSpans'>
           <td>Sneakers</td> 
           <td>5 <span>(CM)</span> </td> 
           <td>5 <span>(kg)</span> </td> 
           <td>5 <span>(CM)</span> </td> 
           <td>5 <span>(CM)</span> </td> 
           <td>5 <span>(SAR)</span> </td> 
           <td> 5 <b className='bodyProductSpan'>...</b> </td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr className='productSpans'>
          <td>Sneakers</td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(kg)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(SAR)</span> </td> 
          <td> 5 <b className='bodyProductSpan'>...</b> </td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr className='productSpans'>
          <td>Sneakers</td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(kg)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(SAR)</span> </td> 
          <td> 5 <b className='bodyProductSpan'>...</b> </td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr className='productSpans'>
          <td>Sneakers</td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(kg)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(SAR)</span> </td> 
          <td> 5 <b className='bodyProductSpan'>...</b> </td> 
          </tr>
          <div className='HRproduct'> </div>
          <tr className='productSpans'>
          <td>Sneakers</td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(kg)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(CM)</span> </td> 
          <td>5 <span>(SAR)</span> </td> 
          <td> 5 <b className='bodyProductSpan'>...</b> </td> 
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

export default Products;