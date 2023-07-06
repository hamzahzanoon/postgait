import React, { useState } from 'react';
import './Group.css';
import LineChart from './LineChart';
import {UseData} from './GroupData';

const Groups = () => {
  const [userData , setUserData] = useState({
    labels: UseData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UseData.map((data) => data.userGain),
      backgroundColor: "#FC746C",
    }]
  })
  return (
   <div className='groups-main'>
   <div className='group-prodact'>

      <div className='group'>
       
        <div>
         <div className='h-group'>
          <div className='trends'>
           <h5>Today's trends <span>( Gross Profit )</span> </h5>
           <p>as of 25May 2023, 09:41 PM</p>
          </div> 
        
          <div className='ulnav'>
           <p>Month</p>
           <p className='a-nav-link'>Doy</p>
           <p>Week</p>
          </div>
         </div> 
        </div> 
       <LineChart chartData={userData} />
      
      </div>

      <div>
       <div className='h-group-card'>
        <img src={require("../../../../images/Group 1000004976.jpg")} alt='shape1' />
       </div>
      </div>
      
    </div>
   </div>
  )
}

export default Groups;