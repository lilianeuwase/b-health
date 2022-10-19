import React from 'react';
import '../../App.css';
import Body from '../Body';
import Hero from '../Hero';
import { How } from '../How';
import { About } from '../About';
import { Team } from '../Team';
import JsonData from "../../data/data.json";
import { useState, useEffect } from "react";


function Home() {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Body />
      <Hero />
      <How data={landingPageData.How}/>
      <About data={landingPageData.About}/>
      <Team />
      
    </>
  );
}

export default Home;
