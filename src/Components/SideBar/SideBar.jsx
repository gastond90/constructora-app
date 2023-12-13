import React from "react";
import "./styles.css";
import logo from '../../Img/isoFortismenu.svg'
import logo2 from '../../Img/LogoFortisblanco.png'
import icono from '../../Img/01 ICONO F.png'
import ButtonMenu from "../ButtonMenu";
import Facebook from "../Facebook";
import Insta from "../Insta";
import Linkedin from "../Linkedin";

function ToggleSidebar({ handleNavigation, isOpen, setIsOpen}) {

  const toggleSidebar = () => {setIsOpen(!isOpen);};

  return (
    <>
      <div
        id="drawer-navigation"
        className={`hidden sm:block fixed top-0 left-0 overflow-y-auto transition-transform bg-gris-100 shadow-2xl ${
          isOpen ? "w-5/12 bg-rojo-100 submenu h-screen transition-width" : "sm:w-1/18-screen w-1/5 h-screen transition-width"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
        style={{zIndex: "200"}}
        onClick={toggleSidebar}
      >
         
        {isOpen ? 
        <>
        <div className="h-1/5 submenu2 items-start w-full justify-center">
        <img src={icono} className="w-6 m-16 h-auto" alt=""/>
        </div>
        <div className="h-1/5 submenu2 justify-center">
        <img src={logo2} className="w-48 h-auto cursor-pointer" alt="" onClick={toggleSidebar}></img>
        </div>
        <div className="h-3/5 submenu2 justify-start w-2/5">
          <ButtonMenu text={"Sobre Nosotros"} onClick={() => handleNavigation("Sobre Nosotros")}/>
          <ButtonMenu text={"Servicios"}  onClick={() => handleNavigation("Servicios")}/>
          <ButtonMenu text={"Obras"}  onClick={() => handleNavigation("Obras")}/>
          <ButtonMenu text={"Contacto"}  onClick={() => handleNavigation("Contacto")}/>
        <div className="flex justify-end mt-4">
        <Facebook/>
        <Insta/>
        <Linkedin/>
        </div>
        </div>
        </>
        : 
        <div className="h-full">
          <div className="h-1/5 submenu">
            <img src={logo} className="w-12 h-auto" alt=""></img>
          </div>
          <div className="h-3/5 submenu border-t border-b border-black">
          <div>
          <button className="relative group" onClick={toggleSidebar}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px]  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 ">
              <div className="flex flex-col justify-between w-[28px] h-[20px]  duration-300 origin-center overflow-hidden ">
                <div className="bg-black h-[2px] w-16  "></div>
                <div className="bg-black h-[2px] w-16 "></div>
                <div className="bg-black h-[2px] w-16  "></div>
              </div>
            </div>
          </button>
        </div>
          </div>
          <div className="h-1/5 submenu">
            <p className="flecha">→</p>
          </div>
          
        </div>
       }
        
      </div>

      
    </>
  );
}

export default ToggleSidebar;
