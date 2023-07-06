import React from 'react';
import './Schedule.css';

const Schedule = () => {
  return (
     <div style={{width: '100%'}}>
      <div className='schedule-prodact'>

       <div>
        <div className='h-group-card'>
         <img src={require("../../../../images/div.project_complete.jpg")} alt='shape1' />
        </div>
       </div>

      <div className='group group2'>

        <div className='h-group h-group2'>
         <div className='trends'>
          <h5>Best Selling Products</h5>
          <p>as of 25May 2023</p>
         </div> 
         <div className='ulnav'>
          <p>Month</p>
          <p className='a-nav-link'>Doy</p>
          <p>Week</p>
         </div>
         </div> 

         <main className='table'>  
         <div className='table_body'>
         <div className='scheduleTable'>
          <table>
           <thead className='scheduleHead'>
            <tr>
             <th className='headShops boxProduct2'>
              <img src={require("../../../../images/لقطة_الشاشة_2023-06-13_161635-removebg-preview.png")} alt='shape1' />
              <span>Product name</span>
             </th>
             <th className='headShops'>
              <img src={require("../../../../images/لقطة_الشاشة_2023-06-12_221225-removebg-preview.png")} alt='shape1' />
              <span>Shop</span>
             </th>
             <th className='headShops'>
              <img src={require("../../../../images/لقطة_الشاشة_2023-06-11_183558-removebg-preview.png")} alt='shape1' />
              <span>weight</span>
             </th>
             <th className='headShops'>
              <img src={require("../../../../images/لقطة_الشاشة_2023-06-11_183839-removebg-preview.png")} alt='shape1' />
              <span>Quantity</span>
             </th>
             <th className='headShops boxProduct3'>
              <img src={require("../../../../images/لقطة_الشاشة_2023-06-12_174441-removebg-preview.png")} alt='shape1' />
              <span>Remaining.Q</span>
             </th>
            </tr> 
           </thead>
           <tbody className='scheduleBody'>
            <tr>
             <td className='blue'><b>sport clothes</b><b>Available</b></td>
             <td>Golden Joule</td>
             <td>10</td>
             <td>10</td>
             <td>10</td>
            </tr>
            <div className='HRproduct'></div>
            <tr>
             <td className='blue yellow'><b>sport clothes</b><b>Available</b></td>
             <td>Golden Joule</td>
             <td>10</td>
             <td>10</td>
             <td>10</td>
            </tr>
            <div className='HRproduct'></div>
            <tr>
             <td className='blue'><b>sport clothes</b><b>Available</b></td>
             <td>Golden Joule</td>
             <td>10</td>
             <td>10</td>
             <td>10</td>
            </tr>
            <div className='HRproduct'></div>
            <tr>
             <td className='blue yellow'><b>sport clothes</b><b>Available</b></td>
             <td>Golden Joule</td>
             <td>10</td>
             <td>10</td>
             <td>10</td>
            </tr>
            <div className='HRproduct'></div>
            <tr>
             <td className='blue'><b>sport clothes</b><b>Available</b></td>
             <td>Golden Joule</td>
             <td>10</td>
             <td>10</td>
             <td>10</td>
            </tr>
            <tr>
            <td className='blue'><b>sport clothes</b><b>Available</b></td>
            <td>Golden Joule</td>
            <td>10</td>
            <td>10</td>
            <td>10</td>
           </tr>
           <tr>
           <td className='blue'><b>sport clothes</b><b>Available</b></td>
           <td>Golden Joule</td>
           <td>10</td>
           <td>10</td>
           <td>10</td>
          </tr>
           </tbody>
          </table>
         </div>
        </div>
       </main>

     </div>
    </div>
   </div>
  )
}

export default Schedule;

