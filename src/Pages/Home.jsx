import React, { useEffect, useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import Inicio from '../Components/Inicio';
import Nosotros from '../Components/Nosotros';
import Servicios from '../Components/Servicios';
import Obras from '../Components/Obras';
import Contacto from '../Components/Contacto';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import Whatsapp from '../Components/Whatsapp';

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState();
const [activeSection, setActiveSection] = useState("");
const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
const handleNavigation = (section) => {
  setActiveSection(section);
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    navigate(`#${section}`);
  }
};

useEffect(() => {
  if (window.location.hash === '#Obras') {
    const element = document.getElementById('Obras');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, []);
return (
  
        <NoAuthLayout
            showingNavigationDropdown={showingNavigationDropdown}
            setShowingNavigationDropdown={setShowingNavigationDropdown}
            handleNavigation={handleNavigation}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        >
          <div onClick={()=>setIsOpen(false)}>
            <Inicio />
            <Nosotros/>
            <Servicios/>
            <Obras/>
            <Contacto/>
            <Whatsapp/>
            <Footer handleNavigation={handleNavigation}/>
            
          </div>
          
        </NoAuthLayout>
   
    );
}
