import React ,{useState} from 'react';
import './Settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from "../../Uitily2/Header/Header";
import Searchs2 from "../../Uitily2/search/Search2";

const Settings = () => {
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
            <h2>Settings</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Settings </p>
          </div>
          <div className='boxShos'>
           <div>
             <div className='settingsTop'>
              <h3>Currency, units of weight and length</h3>
              <p>Please specify both the currency to be used in the location and also the units of weight and length of the scale</p>
             </div>
           </div>

           
            <div className='settingsCeanter'> 
             <h5>Settings</h5>
             <div className="settingsCeanterTop">
              <div>
               <div className='selectSwitch'>
               <span>Country <b>*</b></span>
               <div className="btn-group">
               <button className="btn btn-lg dropdown-toggle settingsImg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-15_125518-removebg-preview.png")} alt='shape1' />
                 Saudi Arabia
               </button>
               <ul className="dropdown-menu">
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
                <li><a className="dropdown-item" value="Sneakers">Sneakers</a></li>
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
               </ul>
              </div>
              </div>
              </div>
              <div>
               <div className='selectSwitch'>
               <span>weight <b>*</b></span>
               <div className="btn-group">
               <button className="btn btn-lg dropdown-toggle settingsImg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-15_125329-removebg-preview.png")} alt='shape1' />
                  kilogram <small>(kg)</small> 
               </button>
               <ul className="dropdown-menu">
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
                <li><a className="dropdown-item" value="Sneakers">Sneakers</a></li>
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
               </ul>
              </div>
              </div>
              </div>
              <div>
               <div className='selectSwitch'>
               <span>Height <b>*</b></span>
               <div className="btn-group">
               <button className="btn btn-lg dropdown-toggle settingsImg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-23_182000-removebg-preview.png")} alt='shape1' />
                 Centimeter <small>(CM)</small>
               </button>
               <ul className="dropdown-menu">
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
                <li><a className="dropdown-item" value="Sneakers">Sneakers</a></li>
                <li><a className="dropdown-item" value="Sport Kit">Sport Kit</a></li>
               </ul>
              </div>
              </div>
              </div>
             </div>
             <div className="poupBtn">
              <button style={{textAlign: "center"}} className="poupFillBtn">Save changes</button>
            </div>
            </div>

            <div className='settingsBotton'>
             <h4> Security settings </h4>
             <div className="settingsInputs">
              <div className="settingsInput">
               <input type="password" placeholder="current password" />
               <input type="password" placeholder="Password" />
               <input type="password" placeholder="Password" />
              </div>
              <div className="settingImg">
               <img src={require("../../../images/Illustration-removebg-preview.png")} alt='shape1' />
              </div>
             </div>
             <div className="poupBtn">
              <button style={{textAlign: "center"}} className="poupFillBtn">Save changes</button>
            </div>
            </div>
             
           </div>
          </div>
        
        </>
    )
}

export default Settings;