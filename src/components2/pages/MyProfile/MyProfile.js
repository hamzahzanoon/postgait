import React , {useEffect, useState} from 'react';
import './MyProfile.css';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Profile = () => {
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
            <h2>My Profile</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> My Profile </p>
          </div>
          <div className='boxShos'>
  
          <div className='myProfiles'>
          <h4>My Profile</h4>
           <div className='myProfile'>
            <div>
             <div className='myProfileInput'>
              <div>
               <p>Full Name<b>*</b></p>
               <input type='text' placeholder='First Name' />
              </div>
              <div>
               <p>Last Name<b>*</b></p>
               <input type='text' placeholder='Last Name' />
              </div>
             </div>
             <div className='myProfileRectangle'>
              <p>Email<b>*</b></p>
              <input type='text' placeholder='Email' />
             </div>
             <div className='myProfileRectangle myProfileRectangle2'>
              <p>Mobile Number<b>*</b></p>
              <select>
               <option>+966</option>
               <option value="option2">+965</option>
               <option value="option3">+968</option>
               <option value="option3">+961</option>
              </select>
              <input type='text' placeholder='5x xxx xxxx' />
             </div>
            </div>
            <div className='profileDownload'>
             <img src={require("../../../images/Screenshot_3_1-removebg-preview.png")} alt='shape1' />
             <input type='file' />
             <FontAwesomeIcon className='faArrowUp' icon={faArrowUp} />
            </div>
            </div>

            <div>
             <h4>Business Address</h4>
             <div className='profileCeanter'>

             <div className='profilesCelects'>
             <p>Country <b>*</b></p>
             <button className="btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Enter Country
             </button>
             <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174350-removebg-preview.png")} alt='shape1' />
             <ul className="dropdown-menu">
              <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
              <li><a className="dropdown-item" value="Sneakers">Sneakers</a></li>
              <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
             </ul>
             </div>

              <div className='profilesCelects'>
              <p>City <b>*</b></p>
              <button className="btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               Enter City
              </button>
              <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174441-removebg-preview.png")} alt='shape1' />
              <ul className="dropdown-menu">
               <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
               <li><a className="dropdown-item" value="Sneakers">Sneakers</a></li>
               <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
              </ul>
              </div>

              <div className='profilesCelects'>
              <p>Postal Code <b> *</b></p>
               <input type='text' placeholder='Enter Postal Code' />
               <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174506-removebg-preview.png")} alt='shape1' />
              </div>
             </div>
             
              <div className='profileBotton'>
              <div className="colorFillPart4">
               <p>Customer Address<b>*</b> </p>
               <input type="text" placeholder="Enter Title I" />
               <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
             </div>
               <div className="colorFillPart4">
                <p>Customer Address<b>(Elective)</b> </p>
                <input type="text" placeholder="Enter Title I" />
                <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
               </div>
              </div>
              <div className="poupBtn">
              <button className="poupFillBtn">Save</button>
             </div>
            </div>

          
          </div>
          

  
          </div>
         </div>
         </>
    )
}

export default Profile;