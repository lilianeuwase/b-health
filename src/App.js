import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes> 
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
