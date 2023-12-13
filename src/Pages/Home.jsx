import React, { useEffect, useRef, useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import Inicio from '../Components/Inicio';
import Nosotros from '../Components/Nosotros';
import Servicios from '../Components/Servicios';
import Obras from '../Components/Obras';
import Contacto from '../Components/Contacto';
import Footer from '../Components/Footer';
import { useHistory, useNavigate } from 'react-router-dom';

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

/* const targetRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  observer.observe(targetRef.current);

  // Cleanup the observer when the component is unmounted
  return () => {
    observer.disconnect();
  };
}, []); // Run effect once when the component mounts */
  
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
            <Footer handleNavigation={handleNavigation}/>
          </div>
          
        </NoAuthLayout>
   
    );
}
