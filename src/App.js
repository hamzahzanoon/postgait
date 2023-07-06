import React , {createContext} from 'react';
import './App.css';
import { Routes , Route} from 'react-router-dom';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Conditions from './components/conditions/Conditions';
import Privacy from './components/privacy/Privacy';
import Blog from './components/blog/Blog'
import Cards2 from './components/blog/card2/Card2';
import HomePage from './components/home/HomePage';
import Regester from './components/uitily/regester/Regester';
import Login from './components/uitily/Login/Login';
import Uitily from './components/uitily/Uitily';
import Recovery from './components/uitily/recovery/Recovery';
import Dashboard from './components2/pages/Dashboard/Dashboard';
import Shops from './components2/pages/Shops/Shops';
import Products from './components2/pages/Shops/Product';
import Classifications from './components2/pages/Shops/Classifications ';
import Shipments from './components2/pages/Shipments/Shipment';
import MyProfile from './components2/pages/Settings/Settings';
import Settings from './components2/pages/Settings/Settings';
import Wallet from './components2/pages/Wallet/Wallet';
import BankAccounts from './components2/pages/Wallet/BankAccounts';
import PaymentMethods from './components2/pages/Wallet/PaymentMethods';
import PaymentMethods2 from './components2/pages/Wallet/PaymentMethods2';
import MyBills from './components2/pages/MyBills/MyBills';
import Profile from './components2/pages/MyProfile/MyProfile';
import Customer from './components2/pages/Shipments/Customer';
import ShipmentDesktop22 from './components2/pages/Shipments/ShipmentDesktop22';
import ShippingByDimensions from './components2/pages/Shipments/ShippingByDimensions';
import ShipmentEnd25 from './components2/pages/Shipments/ShipmentEnd25';
import AddStor2 from './components2/PopUp/AddStore2';
import AddClient2 from './components2/PopUp/AddClient2';
import AddProduct2 from './components2/PopUp/AddProduct2';
import AddShipment from './components2/PopUp/AddShipment';




const App = () => {


  return (
    <div className="App">

       <Routes>
       
        <Route path='/' element={<Uitily />}>
         <Route path="/" index element={<HomePage />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/conditions' element={<Conditions />} />
         <Route path='/privacy' element={<Privacy />} />
         <Route path='/blog' element={<Blog />} />
         <Route path='/cards2' element={<Cards2 />} />
        </Route>

         <Route path='/regester' element={<Regester />} />
         <Route path='/login' element={<Login />} />
         <Route path='/recovery' element={<Recovery />} /> 

         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/shops' element={<Shops /> } />
         <Route path='/products' element={<Products />} />
         <Route path='/classifications' element={<Classifications />} />
         <Route path='/shipments' element={<Shipments />} />
         <Route path='/shipmentDesktop22' element={<ShipmentDesktop22 />} />
         <Route path='/shippingByDimensions' element={<ShippingByDimensions />} />
         <Route path='/shipmentEnd25' element={<ShipmentEnd25 />} />
         <Route path='/settings' element={<Settings />} />
         <Route path='/wallet' element={<Wallet />} />
         <Route path='/bankAccounts' element={<BankAccounts />} />
         <Route path='/paymentMethods' element={<PaymentMethods />} />
         <Route path='/paymentMethods2' element={<PaymentMethods2 />} />
         <Route path='/mybills' element={<MyBills />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/customer' element={<Customer />} />
         
        

         
         <Route path='/addStor2' element={<AddStor2 />} />
         <Route path='/addClient2' element={<AddClient2 />} />
         <Route path='/addProduct2' element={<AddProduct2 />} />
         <Route path='/addShipment' element={<AddShipment />} />
        </Routes>

    </div>
  );
 }
export default App;
