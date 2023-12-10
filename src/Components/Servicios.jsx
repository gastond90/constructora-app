import React from 'react';
import Cuadrado from './Cuadrado';
import casco from '../Img/02 ICONO CASCO.png'
import flechita from '../Img/04 FLECHA.png'
import grua from '../Img/03 ICONO GRUA.png'
import F from '../Img/01 ICONO F.png'
import resp from '../Img/ServiciosResponsive.png'
import resp2 from '../Img/nosotrosResp.png'

function Servicios() {
    return ( 
    <div id="Servicios" className='sm:bg-servicios h-auto sm:h-full' style={{/* minHeight: "100vh", */ backgroundSize:"cover",}}>
        <div className='py-16 '>
            <p className='tituloServicios'>NUESTROS</p>
            <p className='tituloServiciosBold'>SERVICIOS</p>
        </div>
            
        <div className='sm:justify-center hidden sm:flex lg:pt-16 sm:pb-16'>
            <div className="grid-container">
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
        </div>
        <div className='w-screen flex sm:hidden justify-center pb-16'>
            <img src={resp2} alt="" className="flex sm:hidden"/>
        </div>
       
    </div>
     );
}

export default Servicios;