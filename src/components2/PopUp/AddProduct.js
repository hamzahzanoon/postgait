import React , {useState} from "react";
import { Link } from "react-router-dom";

const AddProduct = (props) => {

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

    return (props.product) ? (
        <>
        <div className="popUp">
         <div className="popUpInner AddProducts">



          <div className="popupTop">
           <h4>Add a new Product</h4>
       
          </div>
          <div className="popupCeanter">
          <h6> <span>Personal</span> Data Card</h6>
          <div className="addProductTop">

         <div>
          <div className="fillNames fillNames2">
          <div className="colorFillPart">
           <span>Name Product <b>*</b></span>
           <input type="text" placeholder="Enter Name Product" />
           <img src={require("../../images/لقطة_الشاشة_2023-06-11_183416-removebg-preview.png")} alt='shape1' />
          </div>

          <div className='colorFillPart colorFillPart3'>
          <span>classifications<b>*</b></span>
          <div className="btn-group">
          <button style={{border: "1px solid #858C94" , backgroundColor: "#fff" }} className="btn btn-lg dropdown-toggle dropDownShipment" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={require("../../images/لقطة_الشاشة_2023-06-11_225936-removebg-preview.png")} alt='shape1' />
            Enter classifications 
          </button>
          <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="#">Enter classifications</a></li>
           <li><a className="dropdown-item" href="#">Enter classifications</a></li>
           <li><a className="dropdown-item" href="#">Enter classifications</a></li>
           <li><a className="dropdown-item" href="#">Enter classifications</a></li>
           <li><a className="dropdown-item" href="#">Enter classifications</a></li>
          </ul>
          </div>
          </div>
          
          <div className="colorFillPart">
           <span>Price<b>*</b> </span>
           <input type="text" placeholder="Enter Price" />
           <img src={require("../../images/لقطة_الشاشة_2023-06-11_183758-removebg-preview.png")} alt='shape1' />
          </div>
         </div>
        </div>

          <div>
          <div className='rectangleSwitchsBotton'>
          <div>
          <div className='potionTtem'>
          <div className='qtyShipment'><span>Qty <b>*</b></span></div>
            <div className='switchNumber'>
            <button className='switchNumber1' disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
            <span className='switchNumberZero'>{options.children}</span>
            <button className='switchNumber2' onClick={() => handleOption("children", "i")}>+</button>
            </div>
           </div>
          </div>
         </div>
          <div className="boxAddProduct">
           <div className="boxAddProduct2">
            <img src={require("../../images/لقطة_الشاشة_2023-06-19_221922-removebg-preview.png")} alt='shape1' />
            <p>Add a main image of the product</p>
            <span>Drag the image here or click Selection manually</span>
           </div> 
           <div className="ProductImgs">
             <img src={require("../../images/لقطة_الشاشة_2023-06-19_221922-removebg-preview.png")} alt='shape1' />
           </div> 
          </div>
          </div>
         </div>

          <div className="HRpopUp"></div>
           <h6 className="productName">Product <span>storage</span> data</h6>
            <div className="fillNames">
             <div className="colorFillPart">
              <span>Length (CM)<b>*</b></span>
              <input type="text" placeholder="Please select Client" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-10_222348-removebg-preview.png")} alt='shape1' />
             </div>
             <div className="colorFillPart">
              <span> weight (kg)<b>*</b> </span>
              <input type="text" placeholder="Please select Client" />
              <img src={require("../../images/لقطة_الشاشة_2023-06-11_183558-removebg-preview.png")} alt='shape1' />
             </div>
            </div>
            <div className="fillNames">
            <div className="colorFillPart">
             <span>Height (CM)<b>*</b> </span>
             <input type="text" placeholder="Please select Client" />
             <img src={require("../../images/لقطة_الشاشة_2023-06-11_183639-removebg-preview.png")} alt='shape1' />
            </div>
            <div className="colorFillPart">
             <span>Width (CM)<b>*</b> </span>
             <input type="text" placeholder="Please select Client" />
             <img src={require("../../images/لقطة_الشاشة_2023-06-11_183718-removebg-preview.png")} alt='shape1' />
            </div>
           </div>

            <div className="HRpopUp"></div>

            <div>
             <h6 className="productName"><span>Safety</span> and security data</h6>
             <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
              <label className="form-check-label" htmlFor="validationFormCheck1">Fragile Product (Fragile Products)</label>
             </div>
             <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="validationFormCheck2" required />
              <label className="form-check-label" htmlFor="validationFormCheck2">The product contains liquid substances</label>
             </div>
             <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="validationFormCheck3" required />
              <label className="form-check-label" htmlFor="validationFormCheck3">The product contains hazardous materials (explosives, raids, flammable materials, toxic or infectious materials, or any dangerous materials in general)</label>
             </div>
            </div>
 
            <div className="poupBtn">
             <button className="poupFillBtn">Add customer</button>
             <button onClick={()=> props.setProduct(false)}>Cancel order</button>
            </div>
            </div> 
          
          {props.childern}
         </div>
        </div>
        </>
    ) : ""
}

export default AddProduct;



