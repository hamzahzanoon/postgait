import React ,{useState} from 'react';
import './Wallet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from "../../Uitily2/Header/Header";
import Searchs2 from "../../Uitily2/search/Search2";
import { Link } from "react-router-dom";
import * as RadioGroup from '@radix-ui/react-radio-group';


const PaymentMethods  = () => {
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
            <h2>Wallet</h2>
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Payment Methods </p>
          </div>

        

         <div className='boxShos'>
           <div className='bankAccountsTop'>
             <h4>Payment Methods</h4>
             <p>Multiple payment methods enable you to recharge your balance or pay for recharge operations, by adding your bank accounts or credit cards.</p>
           </div>

           <div className="boxPayment">
           <div>
           <form>
           <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
             <h5 className='radioGroupTitle'>Select the appropriate payment method for you</h5>
            <div className='radioGroup1' style={{ display: 'flex', alignItems: 'center' }}>
               <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
                 <RadioGroup.Indicator className="RadioGroupIndicator" />
               </RadioGroup.Item>
               <label className="LabelS" htmlFor="r1">
                 <img src={require("../../../images/لقطة_الشاشة_2023-06-15_171130-removebg-preview.png")} alt='shape1' /> Bank Accounts
               </label>
             </div>
             <div className='radioGroup1' style={{ display: 'flex', alignItems: 'center' }}>
               <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
                 <RadioGroup.Indicator className="RadioGroupIndicator" />
               </RadioGroup.Item>
               <label className="LabelS" htmlFor="r2">
                <img src={require("../../../images/لقطة_الشاشة_2023-06-15_171150-removebg-preview.png")} alt='shape1' /> credit cards
               </label>
             </div>
             <div className='radioGroup1' style={{ display: 'flex', alignItems: 'center' }}>
               <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
                 <RadioGroup.Indicator className="RadioGroupIndicator" />
               </RadioGroup.Item>
               <label className="LabelS" htmlFor="r3">
                <img src={require("../../../images/لقطة_الشاشة_2023-06-15_171213-removebg-preview.png")} alt='shape1' /> apple pay
               </label>
             </div>
           </RadioGroup.Root>
         </form>
           </div>  
            <div className="settingImg bankAccountsImg">
             <img src={require("../../../images/Layer 1.jpg")} alt='shape1' />
            </div>
           </div>
            <div className="poupBtn">
           <Link to="/paymentMethods2" style={{textDecoration: "none"}}> <button style={{textAlign: "center"}} className="poupFillBtn">Add Bank Accounts </button> </Link>
            </div>
         </div>

         </div>
        
        </>
    )
}

export default PaymentMethods;

