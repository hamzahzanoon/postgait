import React from "react";
import './PopUp.css';
import { Link } from "react-router-dom";
// <button className="close" onClick={()=> props.setTrigger(false)}>Close</button>

const AddStor = (props) => {
    return (props.stor) ? (
        <div className="popUp">
         <div className="popUpInner">
          <div className="popupTop">
           <h4>Add a new Store</h4>
           <img  src={require("../images/لقطة_الشاشة_2023-06-12_174545-removebg-preview.png")} alt='shape1' />
          </div>
          <div className="popupCeanter">
           
           <img onClick={()=> props.setTrigger(false)} src={require("../images/لقطة_الشاشة_2023-06-12_174545-removebg-preview.png")} alt='shape1' />
           <div className="poupBtn">
            <button className="poupFillBtn">Add Store</button>
           </div>
          </div> 
          
          {props.childern}
         </div>
        </div>
    ) : ""
}

export default AddStor;