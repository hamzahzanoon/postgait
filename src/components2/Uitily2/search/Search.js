import React , {useState} from 'react';
import {Row , Col} from 'react-bootstrap';
import './Search.css';
import { Link } from '@nextui-org/react';

const Searchs = ({openHeader , handelOpenHeader}) => {
  const [open, setOpen] = useState(false);
  const [openNotificat, setOpenNotificat] = useState(false);

  return (
    <div>
    <Row className='h-top'>
    <Col>
      <div className='h-home'>
       <div className='h-left'>
        <div className='h-name'>
         <div className='hOH'>
          <i style={{color: "#fff"}} onClick={()=> handelOpenHeader()}  className="fa-solid fa-bars fa-flip"></i>  
         </div>
         <h5>welcome</h5>
         <h6>Abdullah Foundation</h6>
        </div>
        <div className='h-input'>
         <input type='text' placeholder='Search here...' /> 
         <i className="fa-solid fa-magnifying-glass"></i>
        </div>
       </div>
       <div className='h-icons'>
        <i onClick={()=>setOpen(!open)} className="fa-solid fa-bell open-icon"></i>

        { open &&   <div className='opens'>
         <div className='notificationTitle'> <h4>Notifications</h4> </div>
         <div className='notifications'>

          <div className='notificaPath'>
           <div className='notificaPat'>
            <div className='notificaPa'>
             <img src={require("../../../images/Icon (2).jpg")} alt='shape1' />
             <div>
             <h6>Kathryn Sent You a Message</h6>
             <div className='notificaPathNoti'>
              <p>Tap to see the message</p>
              <span>2 m ago</span>
             </div>
            </div>
             </div>
            </div>
           <b></b>
          </div>
          
          <div className='notificaPath'>
           <div className='notificaPat'>
            <div className='notificaPa'>
             <img src={require("../../../images/Icon (1).jpg")} alt='shape1' />
              <div>
               <h6>Your Shipping Already Delivered</h6>
               <div className='notificaPathNoti'>
                <p>Tap to  see the detail shipping</p>
                <span>2 m ago</span>
               </div>
              </div>
             </div>
            </div>
            <b></b>
          </div>
          
          <div className='notificaPath'>
          <div className='notificaPat'>
           <div className='notificaPa'>
            <img src={require("../../../images/Icon (2).jpg")} alt='shape1' />
            <div>
            <h6>Try The Latest Service From Tracky!</h6>

            <div className='notificaPathNoti'>
             <p>Let’s try the feature we provide</p>
             <span>2 m ago</span>
            </div>
            
           </div>
            </div>
           </div>
           <b></b>
         </div>

         <div className='notificaPath'>
         <div className='notificaPat'>
          <div className='notificaPa'>
           <img src={require("../../../images/Icon (3).jpg")} alt='shape1' />
            <div>
             <h6>Get 20% Discount for First Transaction!</h6>
             <div className='notificaPathNoti'>
              <p>For all transaction without requirements</p>
              <span>2 m ago</span>
             </div>
            </div>
           </div>
           
          </div>
        </div>
         </div>
         </div>
  }
        <i className="fa-solid fa-globe"></i>
        
        <img onClick={()=>setOpenNotificat(!openNotificat)} className="open-icon" src={require("../../../images/client_img.png.jpg")} alt='shape1' />
        { openNotificat &&    <div className='opensName'>
        <div className='notificationTitle'> <h4>Abdullah Foundation</h4> </div>
        <div className='notifications'>

         <a href="/profile" style={{textDecoration: "none", color: "#000"}}> 
          <div className='notificaPath'>
           <div className='notificaPa'>
            <img src={require("../../../images/name 22.png")} alt='shape1' />
             <div className='notificaPa2'>
              <h6>Profile personly</h6>
             </div>
            </div>
           <b></b>
          </div>
         </a>
         <div className='notificaPath'>
           <div className='notificaPa'>
            <img src={require("../../../images/fffs5931.png")} alt='shape1' />
             <div className='notificaPa2'>
              <h6>Integrations</h6>
             </div>
            </div>
          <b></b>
         </div>
         
         <div className='notificaPath'>
           <div className='notificaPa'>
            <img src={require("../../../images/sssguj044.png")} alt='shape1' />
             <div className='notificaPa2'>
              <h6>change Password</h6>
             </div>
            </div>
          <b></b>
         </div>

         <div className='notificaPath'>
           <div className='notificaPa'>
            <img src={require("../../../images/dgghhn0138.png")} alt='shape1' />
             <div className='notificaPa2'>
              <h6>sign out</h6>
             </div>
            </div>
         </div>
        
        </div>
        </div>
      }
       </div>
      </div>
     </Col>
    </Row>
    </div> 
  )
}

export default Searchs;