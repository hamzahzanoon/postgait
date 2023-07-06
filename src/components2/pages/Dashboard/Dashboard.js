import React , { useState } from 'react';
import Headers from '../../Uitily2/Header/Header';
import Searchs from '../../Uitily2/search/Search';
import CardHome from './CardHome/CardHome';
import Groups from './Group/Group';
import Schedule from './Schedule/Schedule';
import Doard from './Doard/Doard';


const Dashboard = () => {
    const [openHeader , setOpenHeader] = useState(false);
    const handelOpenHeader = () => {
        setOpenHeader(true);
       }
     
       const handelClosHeader = () => {
        setOpenHeader(false);
        }

    return(
       <div>
        <Headers openHeader={openHeader} handelClosHeader={handelClosHeader} />
        <Searchs openHeader={openHeader} handelOpenHeader={handelOpenHeader} />
        <Doard />
        <CardHome />
        <Groups />
        <Schedule />
       </div>
    )
}

export default Dashboard;