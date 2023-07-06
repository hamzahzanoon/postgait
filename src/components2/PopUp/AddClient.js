import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Client = (props) => {

  

    return (props.client) ? (
        <>
        
        <div className="popUp">
         <div className="popUpInner">
          <div className="popupTop">
           <h4>Add a new Client</h4>
          </div>
          <div className="popupCeanter">
          
   
            <h6 className="fillAddress"><span>Personal </span>Data Card</h6>  
            <div className="colorFill">
             <div className="colorFillPart colorFillPart3">
              <span>Name<b>*</b></span>
              <input type="text" placeholder="Enter Name" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
              </div>
             <div className="colorFillPart colorFillPart3">
              <span>E-mail Address<b>*</b></span>
              <input type="text" placeholder="Enter Email" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174224-removebg-preview.png")} alt='shape1' />
             </div>
             <div className='colorFillPart colorFillPart3'>
             <span> Phone Number <b>*</b></span>
             <div className="btn-group">
             <button style={{border: "1px solid #858C94" , backgroundColor: "#fff" }} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={require("../../images/لقطة_الشاشة_2023-06-12_174250-removebg-preview.png")} alt='shape1' />
               +966
             </button>
             <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">+963</a></li>
              <li><a className="dropdown-item" href="#">+961</a></li>
              <li><a className="dropdown-item" href="#">+968</a></li>
              <li><a className="dropdown-item" href="#">+962</a></li>
              <li><a className="dropdown-item" href="#">+967</a></li>
             </ul>
            </div>
           </div>
            </div>
            <div className="HRpopUp"></div>
            <h6 className="fillAddress">Store <span>Address</span>Details</h6>  
            <div className="colorFill">
             <div className="colorFillPart colorFillPart3">
              <span>Country<b>*</b> </span>
              <input type="text" placeholder="Enter Country" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174350-removebg-preview.png")} alt='shape1' />
              </div>
             <div className="colorFillPart colorFillPart3">
              <span>City<b>*</b> </span>
              <input type="text" placeholder="Enter City" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174441-removebg-preview.png")} alt='shape1' />
             </div>
             <div className="colorFillPart colorFillPart3">
             <span>Postal Code<b>*</b> </span>
             <input type="text" placeholder="Enter Postal Code" />
             <img src={require("../../images/لقطة_الشاشة_2023-06-12_174506-removebg-preview.png")} alt='shape1' />
            </div>
            </div>
            <div >
             <div className="colorFillPart4">
              <span>Customer Address<b>*</b> </span>
              <input type="text" placeholder="Enter Title I" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
             </div>
            </div>
            <div >
             <div className="colorFillPart4">
              <span>Customer Address<b>(Elective)</b> </span>
              <input type="text" placeholder="Enter Title I" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174414-removebg-preview.png")} alt='shape1' />
             </div>
            </div>
            <div className="poupBtn">
             <button className="poupFillBtn">Add customer</button>
             <button onClick={()=> props.setClient(false)}>Cancel order</button>
            </div>
           </div> 
          
          {props.childern}
         </div>
        </div>
        </>
    ) : ""
}

export default Client;