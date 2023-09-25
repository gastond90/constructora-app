import React, { useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import grilla from '../Img/grilla.png'
import fondoportada from '../Img/foto.png'
import CASCOOBRA from '../Img/CASCO OBRA.png'
import TIULOOBRA from '../Img/TITULO OBRA.png'
import fortisLogo from '../Img/fortispalabra.svg'
import banda from '../Img/banda_1.gif'
import flecha from '../Img/flecha.png'
import Salta from '../Components/Salta';
import Cuadrado from '../Components/Cuadrado';
import casco from '../Img/02 ICONO CASCO.png'
import flechita from '../Img/04 FLECHA.png'
import grua from '../Img/03 ICONO GRUA.png'
import F from '../Img/01 ICONO F.png'

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(/* 'Inicio' */);

const [activeSection, setActiveSection] = useState("");

  const handleNavigation = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function AccordionItem({ title, content, isOpen, onToggle }) {
    const toggleAccordion = () => {
      onToggle(!isOpen);
    };
  
    return (
    <div className={`transition ${isOpen ? 'bg-white' : ''} ${isOpen ? 'text-rojo-100' : 'text-white'}`}>
      <div className={`hover:bg-white hover:text-rojo-100 accordion-header cursor-pointer transition flex justify-between space-x-5 px-5 items-center h-16 border-b-2 border-white`} onClick={toggleAccordion}>
        <h3 className={`tituloObra hover:text-rojo-100 ${isOpen ? 'text-rojo-100' : ''}`}>{title}</h3>
        <p className='tituloObra pr-8'>{isOpen ? '-' : '+'}</p>
      </div>
      <div className={`bg-azul-100 text-white accordion-content p-12 overflow-hidden ${isOpen ? 'max-h-full' : 'max-h-0 hidden'}`}>
        <p className='detalle'>DETALLE</p>
        {content.map((e, index) => (
          <div key={index} className='flex flex-col items-start justify-start py-2'>
            <p className="detalleObra text-justify font-bold">{e.title}</p>
            <p className="detalleObra text-justify">Obra finalizada {e.finalizada}</p>
          </div>
        ))}
      </div>
    </div>
    );
  }
  const [openItemIndex, setOpenItemIndex] = useState(-1);

  const handleToggle = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(-1); // Close the item if it's already open
    } else {
      setOpenItemIndex(index);
    }
  };

  const accordionItemsData = [
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
    {
      title: "Hotel Salta",
      content: [
        {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
        {title:"Refacciones Varias – Zona de Cocinas", finalizada:"Enero 2023"}, 
    ],
      
    },
 
  ];  

return (
    <>
        <NoAuthLayout
            showingNavigationDropdown={showingNavigationDropdown}
            setShowingNavigationDropdown={setShowingNavigationDropdown}
            handleNavigation={handleNavigation}
        >
            <div id="Inicio" style={{width:"auto",height:"100vh", backgroundImage: `url(${grilla})`, backgroundSize:"contain", backgroundRepeat:"repeat-x"}}>
                <div className='flex justify-end pr-4 sm:pr-8'>
                    <Salta/>
                </div>
                <div className='flex justify-end mt-8 mb-9 pr-8 sm:pr-32'>
                    <img src={fortisLogo} alt="" className="w-32"/>
                </div>
                <div className='flex justify-start'>
                    <img src={fondoportada} alt="" className="lg:pl-40"/>
                </div>
            </div>
            <div id="Sobre Nosotros" className='bg-rojo-100 lg:pl-64' style={{width:"auto",maxHeight:"100vh",height:"100vh", overflowY:'auto'}}>
                <div className='flex flex-col items-start justify-start my-2 pt-8 sm:pt-32 ml-8 sm:ml-0'>
                    <p className='tituloSobre'>SOBRE</p>
                    <p className='tituloSobreBold'>NOSOTROS</p>
                </div>
                <div className='flex mt-8 justify-between'>
                    <div className='flex flex-col w-1/5 sm:w-1/3 justify-start items-start'>
                        <img src={flecha} alt="" className="w-8"/>
                    </div>
                    <div className='flex flex-col w-4/5 sm:w-2/3 justify-start pr-16 mr-0 sm:mr-16'>
                        <p className='textoNos text-start sm:text-justify'>
                        Empresa salteña formada por un equipo multidisciplinario, buscando complementar la ingeniería y la arquitectura con el afán de lograr
                        la excelencia necesaria para cumplir con la
                        exigencia de nuestros clientes.
                        </p>
                        <p className='textoNos mt-4 text-start sm:text-justify'>
                        Conformada por jóvenes profesionales con
                        sobrada experiencia en obras de todo tipo,
                        trabajamos con procesos dinámicos y modernos que nos permiten posicionarnos en el
                        mercado actual de forma firme y solvente.
                        </p>
                    </div>
                </div>
            </div>
            <div id="Servicios" className='lg:pl-16 lg:h-screen p-4'
                style={{
                    width: "auto",
                    minHeight: "100vh",
                    boxShadow: "inset 5px 5px 40px rgba(0, 0, 0, 0.3), inset -5px -5px 40px rgba(0, 0, 0, 0.3)",
                }}
            >
                <div className='py-16'>
                    <p className='tituloServicios'>NUESTROS</p>
                    <p className='tituloServiciosBold'>SERVICIOS</p>
                </div>
                
                <center>
                    <div className="grid-container lg:pl-32">
                        <div className="grid-item"><Cuadrado text={"Análisis Y Armado De Proyectos"}/></div>
                        <div className="grid-item"><Cuadrado text={"Obras De Arquitectura"}/></div>
                        <div className="grid-item"><Cuadrado text={"Obras De Infraestructura Y Saneamiento"}/></div>
                        <div className="grid-item"><Cuadrado text={"Obras Hidráulicas"}/></div>
                        <div className="grid-item"><Cuadrado text={"Obras De Ingeniería"}/></div>
                        <div className="grid-item"><Cuadrado img={casco}/></div>
                        <div className="grid-item"><Cuadrado img={flechita}/></div>
                        <div className="grid-item"><Cuadrado img={F}/></div>
                        <div className="grid-item"><Cuadrado img={grua}/></div>
                        <div className="grid-item"><Cuadrado img={F}/></div>
                    </div>
                </center>
            </div>
            <div id="Obras" className='bg-azul-100' style={{width:"auto",maxHeight:"100vh",height:"100vh"}}>
                <div className='flex w-full justify-between pl-16 pt-16'>
                    <div className="w-1/2 mx-auto flex flex-col items-center">
                        <img src={TIULOOBRA} alt="" className="w-40"/>
                        <img src={CASCOOBRA} alt="" className="w-80"/>
                    </div>

                    <div className="w-1/2 mx-auto flex flex-col pr-8" style={{maxHeight:"80vh", overflowY:'auto'}}>
                        {accordionItemsData.map((item, index) => (
                            <AccordionItem
                            key={index}
                            title={item.title}
                            content={item.content}
                            isOpen={index === openItemIndex}
                            onToggle={() => handleToggle(index)}
                            />
                        ))}                   
                    </div>
                </div>
                <img src={banda} alt="" className="pb-4 w-full"/>
            </div>
        </NoAuthLayout>
    </>
    );
}
