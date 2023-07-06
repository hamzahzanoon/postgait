import React , {useState} from "react";
import './PopUp.css';
import { Link } from "react-router-dom";
import {useDropzone} from 'react-dropzone';

const PopUp = (props) => {

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

 


  const [popup1 , setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
   
  
  const openPopup1 = () => {
     setPopup1(true);
     setPopup2(false);
   };
  
  const closePopup1 = () => {
      setPopup1(false);
  };



  const [nameStorePopUp , setNameStorePopUp] = useState("");
  const [phoneNumberPopUp , setphoneNumberPopUpePopUp] = useState("");
 

  const [errorPopUp , setErrorPopUp] = useState(false)

  function submitPopUp(e) {
    e.preventDefault();
    if(nameStorePopUp.length == 0 && phoneNumberPopUp.length.replace(/[<>s]/d, "") == 0){
      setErrorPopUp(true)
    }
    if(setNameStorePopUp && phoneNumberPopUp){
      console.log("name" , setNameStorePopUp && "phone" , phoneNumberPopUp);
    }
  }


    return (props.trigger) ? (
        <>
        <div className="popUp">
         <div className="popUpInner">
          <div className="popupTop">
           <h4>Add a new Store</h4>
          </div>
          
          <div className="popupCeanter">
           <form onSubmit={submitPopUp}> 
           <h6> <span>Store</span> Data Card </h6>
            <div className="fillNames">
             <div className="colorFillPart">
           <span>Name Store <b>*</b> </span>
              <input onChange={e => setNameStorePopUp(e.target.value)} type="text" placeholder="Enter Name Store" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
              { errorPopUp && nameStorePopUp.length <= 0 ? <h6 className="erorrs">Please enter Store Name</h6> : ""}        
            </div>
             <div className="colorFillPart">
              <span> Phone Number <b>*</b></span>
              <input onChange={e => setphoneNumberPopUpePopUp(e.target.value)} type="Phone" placeholder="Enter Phone Number" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-12_174250-removebg-preview.png")} alt='shape1' />
              { errorPopUp && nameStorePopUp.length <= 0 ? <h6 className="erorrs">Please enter Phone Number</h6> : ""} 
             </div>
            </div>
            <div className="fillNames">
            <div className="colorFillPart colorFillPart3">
             <span>Registration No\working document<b>*</b></span>
             <input className="" type="text" placeholder="Registration No\working document" />
             <img className="imgPsh" src={require("../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
            </div>

            <div className="colorFillPart2">
              <div className="rightImg">
               <img src={require("../../images/لقطة_الشاشة_2023-06-12_222747-removebg-preview.png")} alt='shape1' />
               <img src={require("../../images/لقطة_الشاشة_2023-06-12_222828-removebg-preview.png")} />
              </div>
              <div {...getRootProps({className: 'dropzone'})} className="rightIcon">
              <input {...getInputProps()} />
              <p>Drag & drop files or <Link to="#">Browse</Link> </p>
              </div>
              <div className="rightImg">
               <img src={require("../../images/لقطة_الشاشة_2023-06-12_223414-removebg-preview.png")} alt='shape1' />
              </div> 
            </div>
            <aside>
             <ul>{files}</ul>
            </aside>

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
             <button className="poupFillBtn">Add Store</button>
             <button onClick={()=> props.setTrigger(false)}>Cancel order</button>
            </div>
            </form>
           </div> 
          
          {props.childern}
         </div>
        </div>
        </>
    ) : ""
}

export default PopUp;