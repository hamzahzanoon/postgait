import React ,{useState} from 'react';
import './Wallet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Headers from "../../Uitily2/Header/Header";
import Searchs2 from "../../Uitily2/search/Search2";

const BankAccounts = () => {
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
            <p>Home <FontAwesomeIcon icon={faChevronRight} /> Bank Accounts </p>
          </div>
          <div className='boxShos'>
           <div>
             <div className='bankAccountsTop'>
              <h4>Bank Accounts</h4>
              <p>Adding your bank accounts enables you to withdraw your money to them. When adding a bank account, make sure that :</p>
              <span> <b></b> The bank account belongs to you and the name of the beneficiary matches the name of the beneficiary on your ID. </span> <br />
              <span> <b></b> You bear any financial losses resulting from any incorrect or erroneous information. </span>
              </div>
           </div>

           <div className='settingsBotton'>
            <h4> Adding Bank Accounts  </h4>
           <div className="settingsInputs">
            <div className="bankAccountInput">
             <input type="text" placeholder="Bank Accounts" />
             <input type="text" placeholder="IBAN" />
             <div className="walletSelects">
             <button className=" btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
               Please select Product
             </button>
             <ul className="dropdown-menu walletSelects">
              <li><a className="dropdown-item" value="Sport Kit" href="#">Sport Kit</a></li>
              <li><a className="dropdown-item" value="Sneakers" href="#">Sneakers</a></li>
              <li><a className="dropdown-item" value="Sport Kit" href="#">Sport Kit</a></li>
             </ul>
             </div>
            </div>
            <div className="settingImg bankAccountsImg">
             <img src={require("../../../images/Group 50.jpg")} alt='shape1' />
            </div>
           </div>
           <div className="poupBtn">
            <button className="poupFillBtn">Add Bank Accounts </button>
          </div>
          </div>

           
            <div className='settingsCeanter'> 
             <h5>Bank Accounts </h5>
             <div className="settingsCeanterTop">
              <div>
               <div className='selectSwitch bankAccount'>
               <span> <b>Beneficiary Name</b> </span>
               <input type="text" placeholder="Mashari  Al-Dhubiani" />
               <img src={require("../../../images/لقطة_الشاشة_2023-06-15_154404-removebg-preview.png")} alt='shape1' />
              </div>
              </div>
              <div>
              <div className='selectSwitch bankAccount'>
              <span> <b>IBAN</b> </span>
              <input type="text" placeholder="AL35202111090000000001234567" />
             </div>
             </div>
             <div>
             <div className='selectSwitch bankAccount'>
             <span> <b>Name Bank</b> </span>
             <input type="text" placeholder="Saudi National Bank" />
             <img src={require("../../../images/لقطة_الشاشة_2023-06-15_154425-removebg-preview.png")} alt='shape1' />
            </div>
            </div>
           </div>
          </div>
         </div>
        </div>
        
        </>
    )
}

export default BankAccounts;

