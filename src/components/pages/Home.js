import React from 'react';
import '../../App.css';
import Services from './Services';
import Body from '../Body';
import Hero from '../Hero';
import Aboutus from '../Aboutus';
import How from '../How';


function Home() {
  return (
    <>
      <Body />
      <Hero />
      <Services />
      <How/>
      <Aboutus/>
      
    </>
  );
}

export default Home;
