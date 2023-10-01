import React, { useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import Inicio from '../Components/Inicio';
import Nosotros from '../Components/Nosotros';
import Servicios from '../Components/Servicios';
import Obras from '../Components/Obras';
import Contacto from '../Components/Contacto';
import Footer from '../Components/Footer';

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState();
const [activeSection, setActiveSection] = useState("");
const [isOpen, setIsOpen] = useState(false);
const handleNavigation = (section) => {
  setActiveSection(section);
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  
return (
    <>
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
            <Footer handleNavigation={handleNavigation}/>
          </div>
          
        </NoAuthLayout>
    </>
    );
}
