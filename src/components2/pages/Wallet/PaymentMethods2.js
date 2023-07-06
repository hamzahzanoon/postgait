import React ,{useState} from 'react';
import './Wallet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from "../../Uitily2/Header/Header";
import Searchs2 from "../../Uitily2/search/Search2";

const PaymentMethods2  = () => {
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
             <h5>Select the appropriate payment method for you</h5>
             <div className="methodsImg">
              <img src={require("../../../images/debit card.jpg")} alt='shape1' />
             </div>
             </div>
             <div className="methodsImg2">
              <img src={require("../../../images/Layer 1.jpg")} alt='shape1' />
             </div>
           </div>

           <div className='settingsCeanter'> 
            <div className="settingsCeanterTop">
             <div>
              <div className='selectSwitch'>
              <span> Full Name </span>
              <input type="text" placeholder="MOHSIN JAVED" />
              </div>
             </div>
             <div>
              <div className='selectSwitch'>
              <span> Credit Card Number </span>
              <input type="text" placeholder="**** **** **** 1234" />
              </div>
             </div>
             <div>
              <div className='paymentMethodsInputs'>
               <div className="sheet">
                <span> Exp Date </span>
                <input type="text" placeholder="12/27" />
              </div>
              <div className="sheet">
               <span> CVV </span>
               <input type="text" placeholder="•••" />
              </div>
             </div>
            </div>
           </div>
          </div>

          <div className='settingsCeanter settingsCeanters'> 
          <div className="settingsCeanterTop">
           <div>
            <div className='selectSwitch selectSwitch2'>
            <span> Full Name </span>
            <input type="text" placeholder="MOHSIN JAVED" />
            </div>
           </div>
           <div>
            <div className='selectSwitch selectSwitch2'>
            <span> Credit Card Number </span>
            <input type="text" placeholder="**** **** **** 1234" />
            </div>
           </div>
           <div>
            <div className='paymentMethodsInputs'>
             <div className="sheet sheets">
              <span> Exp Date </span>
              <input type="text" placeholder="12/27" />
            </div>
            <div className="sheet sheets">
             <span> CVV </span>
             <input type="text" placeholder="•••" />
            </div>
           </div>
          </div>
         </div>
        </div>

        </div>
       </div>
     </>
    )
}

export default PaymentMethods2;

