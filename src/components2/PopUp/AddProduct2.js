import React , {useState} from "react";
import { Link } from "react-router-dom";


const AddProduct2 = (props) => {
    return (
        <>
        <div className="popUp">
         <div className="popUpInner AddProducts">

          <div className="popupTop">
           <h4>Add a new Product</h4>
           <img onClick={()=> props.setProduct(false)} src={require("../../images/لقطة_الشاشة_2023-06-12_174545-removebg-preview.png")} alt='shape1' />
          </div>

          <div className="popAddSt popAddSt2">
           <h4>Congratulations</h4>
           <h5>Product has been added successfully</h5>
           <img src={require("../../images/Frassme-removebg-preview.png")} alt='shape1' />
          </div>
 
          <div className="poupBtn">
     <Link to=""><button className="poupFillBtn">Done</button></Link>
          </div>
         </div>
        </div>
        </>
    )  
}

export default AddProduct2;