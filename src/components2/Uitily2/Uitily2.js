import React from 'react';
import Headers from './Header/Header';
import Searchs from './search/Search';
import { Outlet } from 'react-router-dom';

const Uitily2 = () => {
  return (
    <div style={{width: "100%"}}>
     <Headers />
     <Outlet />
     <Searchs />
    </div>
  )
}

export default Uitily2
