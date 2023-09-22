import React, { useState } from "react";
import "./styles.css";
import NavLink from "../NavLink";

function ToggleSidebar({ showingNavigationDropdown, setShowingNavigationDropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      

      {/* <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 p-4 overflow-y-auto transition-transform bg-gris-100 ${
          isOpen ? "w-5/12 h-screen" : "w-40 h-screen"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      > */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 overflow-y-auto transition-transform bg-gris-100 shadow-2xl ${
          isOpen ? "w-5/12  h-screen transition-width" : "lg:w-40 w-1/5 h-screen transition-width"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        {isOpen ? 
        <>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink
            onClick={() => setShowingNavigationDropdown("Inicio")}
            active={showingNavigationDropdown === "Inicio"}
          >
            Inicio
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink
            onClick={() => setShowingNavigationDropdown("Proyectos")}
            active={showingNavigationDropdown === "Proyectos"}
          >
            Proyectos
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink
            onClick={() => setShowingNavigationDropdown("Contacto")}
            active={showingNavigationDropdown === "Contacto"}
          >
            Contacto
          </NavLink>
        </div>
        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <NavLink
            onClick={() => setShowingNavigationDropdown("Sobre Nosotros")}
            active={showingNavigationDropdown === "Sobre Nosotros"}
          >
            Sobre Nosotros
          </NavLink>
        </div>

        <div className="h-1/5 flex flex-col items-center justify-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
              type="button"
              onClick={toggleSidebar}
            >
              {isOpen ? "Hide navigation" : "Show navigation"}
            </button>
          </div>
        
        </>
        : 
        <div className="h-full">
          <div className="h-1/5 flex flex-col items-center justify-center">

            logo
          </div>
          <div className="h-3/5 flex flex-col items-center justify-center border-t border-b border-black">
            burger
          </div>
          <div className="h-1/5 flex flex-col items-center justify-center">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
              type="button"
              onClick={toggleSidebar}
            >
              {isOpen ? "Hide navigation" : "Show navigation"}
            </button>
          </div>
        </div>
       }
        
      </div>
    </>
  );
}

export default ToggleSidebar;
