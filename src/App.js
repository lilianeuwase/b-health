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
import Dentist from './components/pages/services/Dentist';
import Footer from './components/Footer';
import Primary from './components/pages/services/Primary';
import Derma from './components/pages/services/Derma';
import Gyne from './components/pages/services/Gyne';
import Psy from './components/pages/services/Psy';

function App() {

  return (
    
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/dentist" element={<Dentist />} />
                <Route path="/primary" element={<Primary />} />
                <Route path="/derma" element={<Derma />} />
                <Route path="/gyne" element={<Gyne />} />
                <Route path="/psy" element={<Psy />} />
            </Routes> 
            <Footer/>
        </BrowserRouter>
    
  );
}

export default App;
