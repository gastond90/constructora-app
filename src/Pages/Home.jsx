import React, { useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import grilla from '../Img/grilla.png'
import fondoportada from '../Img/foto.png'
import fondoservicios from '../Img/fondo servicios.png'
import fortisLogo from '../Img/fortispalabra.svg'
import flecha from '../Img/flecha.png'
import Salta from '../Components/Salta';
import Cuadrado from '../Components/Cuadrado';
import casco from '../Img/02 ICONO CASCO.png'
import flechita from '../Img/04 FLECHA.png'
import grua from '../Img/03 ICONO GRUA.png'
import F from '../Img/01 ICONO F.png'

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState('Inicio');

const [activeSection, setActiveSection] = useState("");

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
        >
          <div className="">
            <center className=" mx-auto ">
            <div id="Inicio" style={{width:"auto",height:"100vh", backgroundImage: `url(${grilla})`, backgroundSize:"contain", backgroundRepeat:"repeat-x"}}>
                <div className='flex justify-end pr-8'>
                    <Salta/>
                </div>
                <div className='flex justify-end mt-8 mb-9 pr-32'>
                    <img src={fortisLogo} className="w-32"/>
                </div>
                <div className='flex justify-start'>
                    <img src={fondoportada} className="lg:pl-40"/>
                </div>
            </div>
            <div id="Sobre Nosotros" className='bg-rojo-100 lg:pl-64' style={{width:"auto",maxHeight:"100vh",height:"100vh", overflowY:'auto'}}>
                <div className='flex flex-col items-start justify-start my-2 pt-32'>
                    <p className='tituloSobre'>SOBRE</p>
                    <p className='tituloSobreBold'>NOSOTROS</p>
                </div>
                <div className='flex mt-8 justify-between'>
                    <div className='flex flex-col w-1/2 justify-start items-start'>
                        <img src={flecha} className="w-8"/>
                    </div>
                    <div className='flex flex-col w-1/2 justify-start pr-16 mr-16'>
                        <p className='textoNos'>
                        Empresa salteña formada por un equipo multidisciplinario, buscando complementar la ingeniería y la arquitectura con el afán de lograr
                        la excelencia necesaria para cumplir con la
                        exigencia de nuestros clientes.
                        </p>
                        <p className=' textoNos mt-4'>
                        Conformada por jóvenes profesionales con
                        sobrada experiencia en obras de todo tipo,
                        trabajamos con procesos dinámicos y modernos que nos permiten posicionarnos en el
                        mercado actual de forma firme y solvente.
                        </p>
                    </div>
                </div>
            </div>
                <div 
                    id="Servicios" 
                    style={{
                        width: "auto",
                        height: "100vh",
                        boxShadow: "inset 0 0 40px black"
                    }}
                    className='lg:pl-40'
                >
                <div className='py-16'>
                    <p className='tituloServicios'>NUESTROS</p>
                    <p className='tituloServiciosBold'>SERVICIOS</p>
                </div>
              
                <center>
                <div class="grid-container lg:pl-32">
                    <div class="grid-item"><Cuadrado text={"Análisis Y Armado De Proyectos"}/></div>
                    <div class="grid-item"><Cuadrado text={"Obras De Arquitectura"}/></div>
                    <div class="grid-item"><Cuadrado text={"Obras De Infraestructura Y Saneamiento"}/></div>
                    <div class="grid-item"><Cuadrado text={"Obras Hidráulicas"}/></div>
                    <div class="grid-item"><Cuadrado text={"Obras De Ingeniería"}/></div>
                    <div class="grid-item"><Cuadrado img={casco}/></div>
                    <div class="grid-item"><Cuadrado img={flechita}/></div>
                    {/* <div class="grid-item">2</div> */}
                    <div class="grid-item"><Cuadrado img={F}/></div>
                    <div class="grid-item"><Cuadrado img={grua}/></div>
                    <div class="grid-item"><Cuadrado img={F}/></div>
                    </div>
                </center>
            </div>
            
            </center>
        </div>
        </NoAuthLayout>
    </>
    );
}
