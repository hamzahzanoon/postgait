import React ,{useEffect, useState} from 'react';
import './Shipment.css';
import Headers from '../../Uitily2/Header/Header';
import Searchs2 from '../../Uitily2/search/Search2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PopUp from '../../PopUp/PopUp';
import { Link } from 'react-router-dom';
import Client from '../../PopUp/AddClient';
import AddProduct from '../../PopUp/AddProduct';




const Shipments = () => {



  const [selectStore , setSelectStore] = useState('Please select Store')
  const selectStores = [
    {id: 1 , value: "Golden Joule"},
    {id: 2 , value: "Sports World"},
    {id: 3 , value: "Sports Fashion"},
    {id: 4 , value: "Golden Joule"},
    {id: 5 , value: "Sports World"},
  ]
  console.log(selectStores[2].id)
  const [selectClient , setSelectClient] = useState('Please select Client')
  const selectClients = [
    {id: 1 , value: "Abdulrahman Qutb"},
    {id: 2 , value: "Nawaf Sarih Alissa"},
    {id: 3 , value: "Manar Hassan Al , Shaqaq"},
    {id: 4 , value: "Abdulrahman Alghannam"},
    {id: 5 , value: "Nawaf Sarih Alissa"},
  ]
  const [selectProduct , setSelectProduct] = useState('Please select Product')
  const selectProducts = [
    {id: 1 , value: "Sport Kit"},
    {id: 2 , value: "Sneakers"},
    {id: 3 , value: "Sport Kit"},
  ]
  const [dataShipments , setDataShipments] = useState({
    textAreaDetails: "",
    textAreaClient: "",
    selectStores: "",
    selectClients: "",
    selectProducts: "",
  })
  function handelShipments(e) {
    const newdata = {...dataShipments}
    newdata[e.target.id] = e.target.value
    setDataShipments(newdata)
    console.log(newdata);
 }

  function submits(e) {
    e.preventDefault();
  }
  console.log(submits);


  const [buttonPages, setButtonPages] = useState(false);
  const [buttonClient, setButtonClient] = useState(false);
  const [buttonProduct, setButtonProduct] = useState(false);

  
  const [options , setOptions] = useState({
    children: 0,
});
const handleOption = (name , operation) => {
    setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1
        };
    });
};
 

const [openHeader , setOpenHeader] = useState(false);
const handelOpenHeader = () => {
    setOpenHeader(true);
   }
   const handelClosHeader = () => {
    setOpenHeader(false);
    }
   

 
  // useEffect(() => {
  //   setTimeout(()=> {
  //     setButtonClient("/shipments")
  //   },10)
  // }, [])
    return (
        <>
        <PopUp trigger={buttonPages} setTrigger={setButtonPages}></PopUp>
        <Client client={buttonClient} setClient={setButtonClient}></Client> 
        <AddProduct product={buttonProduct} setProduct={setButtonProduct}></AddProduct>
         <Headers openHeader={openHeader} handelClosHeader={handelClosHeader} />
         <Searchs2 openHeader={openHeader} handelOpenHeader={handelOpenHeader} />
         <div className='homeShops'>
         <form onSubmit={(e)=> submits(e)}>
          <div className='homeShipmentTop'>
           <div className='homeShops2 homeShops3'>
            <h2>shipments</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> shipments </p>
           </div>
           <div className='ProductshipmentInput'>
            <input type='text' placeholder='Search for the shipment...' />
            <FontAwesomeIcon className='shipmentFaMagniIcon' icon={faMagnifyingGlass} />
           </div>
          </div>

          <div className='boxShos boxsShipments'>
            <div className='topShosSwitch'>
             <h5>Please select shipping method</h5>
             <div  className='switch'>
             <Link to="/shipments" style={{textDecoration: "none"}}><button className='switchBtn'>Shipping Products</button></Link>
             <Link to="/shippingByDimensions" style={{textDecoration: "none"}}><button  style={{color: "#4F4F4F"}}>Shipping by dimensions</button></Link>
             </div>
            </div>
           

        <div className='boxShosPath2 boxSwitch'>
         <h3>Your shipment with <span>us safely</span> ship everywhere..!!</h3>
         <div className='boxCeanterSwitch'>
         
        <div>
         <div className='selectSwitch'>
           <span>Store <b>*</b></span>
          <div className="btn-group">
           <div style={{border: "1px solid #bbb" , backgroundColor: "#fff"}} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161551-removebg-preview.png")} alt='shape1' />
            {selectStore}
          </div>
           <ul className="dropdown-menu">
           {selectStores.map((item , id) => (
            <li key={item.id} value={item.id} onClick={(e)=> setSelectStore(e.target.textContent)} className="dropdown-item">{item.value}</li>
           ))}
         <Link style={{textDecoration: "none"}} to="#"><li onClick={()=> setButtonPages(true)} className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Store</span></li></Link>
           </ul>
         </div>
        </div>

        <div className='selectSwitch'>
          <span>Client <b>*</b></span>
         <div className="btn-group">
          <div style={{border: "1px solid #bbb" , backgroundColor: "#fff"}} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img src={require("../../../images/لقطة_الشاشة_2023-06-12_174200-removebg-preview.png")} alt='shape1' />
           {selectClient}
          </div>
           <ul className="dropdown-menu">
            {selectClients.map((item , id) => (
            <li key={item.id} onClick={(e)=> setSelectClient(e.target.textContent)} className="dropdown-item">{item.value}</li>
           ))}
           <Link style={{textDecoration: "none"}} to="#"><li onClick={()=> setButtonClient(true)} className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Client</span></li></Link>
          </ul>
         </div>
        </div>

        <div className='selectSwitch'>
           <span>Product <b>*</b></span>
          <div className="btn-group">
           <div style={{border: "1px solid #bbb" , backgroundColor: "#fff"}} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={require("../../../images/لقطة_الشاشة_2023-06-13_161635-removebg-preview.png")} alt='shape1' />
            {selectProduct}
           </div>
            <ul className="dropdown-menu">
             {selectProducts.map((item , id) => (
             <li key={item.id} onClick={(e)=> setSelectProduct(e.target.textContent)} className="dropdown-item">{item.value}</li>
            ))}
            <Link style={{textDecoration: "none"}} to="#"><li onClick={()=> setButtonProduct(true)} className='activeShipment'><img src={require("../../../images/لقطة_الشاشة_2023-06-19_141828-removebg-preview.png")} alt='shape1' /><span>Add a new Product</span></li></Link>
           </ul>
          </div>
         </div>
        </div>

              <div className='boxLeftCSwitch'>
               <div className='boxLeftCSwitchParth'>
                <span>Store Details</span>
                <textarea onChange={(e)=> handelShipments(e)} id="textAreaDetails" value={dataShipments.textAreaDetails} name='textAreaDetails' type='textarea' className='rectangleSwitch' placeholder='No store details to display' />
               </div>
               <div className='boxLeftCSwitchParth'>
                <span>Store Client</span>
                <textarea onChange={(e)=> handelShipments(e)} id="textAreaClient" value={dataShipments.textAreaClient} name='textAreaClient' type='textarea' className='rectangleSwitch' placeholder='No store details to display' />
               </div>
               <div>
               <div className='rectangleSwitchsBotton'>
               <div>
               <div className='potionTtem'>
               <div className='qtyShipment'><span>Qty <b>*</b></span></div>
                 <div  style={{backgroundColor: "#fff"}}  className='switchNumber'>
                 <button className='switchNumber1' disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                 <span className='switchNumberZero'>{options.children}</span>
                 <button className='switchNumber2' onClick={() => handleOption("children", "i")}>+</button>
                 </div>
                </div>
               </div>
               <div className="switchNumberButton">
              <Link style={{textDecoration: "none"}} to="/shipmentDesktop22">  <button type='submit'  className="poupFillBtn">Add shipment</button> </Link>
               </div>
              </div>
               </div>
             </div>
            </div>
           </div>
          </div>
         <div className="poupBtn">
           <button style={{textAlign: "center"}} type='submit' className="poupFillBtn">Shipping Company</button>
         </div>
        </form>
       </div>
      </>
    )
}

export default Shipments;