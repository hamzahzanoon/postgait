import React from 'react';
import Header from './header/Header';
import HomeAbout from './homeAbout/HomeAbout';
import Cards from './cards/Card';
import Vectors from './vectors/Vectors';
import Word from './word/Word';

const HomePage = () => {
  return (

    <div className='font' style={{minHeight: "670px"}}>
     <Header />
     <HomeAbout />
     <Cards />
     <Vectors />
     <Word />
    </div>

  )
}

export default HomePage