import React from 'react';
import Cuadrado from './Cuadrado';
import casco from '../Img/02 ICONO CASCO.png'
import flechita from '../Img/04 FLECHA.png'
import grua from '../Img/03 ICONO GRUA.png'
import F from '../Img/01 ICONO F.png'

function Servicios() {
    return ( 
    <div id="Servicios" className='lg:h-screen'style={{minHeight: "100vh"}}>
            <div className='pt-16 pb-24'>
                <p className='tituloServicios'>NUESTROS</p>
                <p className='tituloServiciosBold'>SERVICIOS</p>
            </div>
            
            <div className='flex sm:justify-center'>
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
        </div>
     );
}

export default Servicios;