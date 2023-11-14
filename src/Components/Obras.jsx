import React, { useState } from 'react';
import CASCOOBRA from '../Img/CASCO OBRA.png'
import TIULOOBRA from '../Img/TITULO OBRA.png'
import fondo from '../Img/fondo-obra.png'
import { Accordion } from './accordion-2/Accordion';

function Obras() {

function AccordionItem({ title, content, isOpen, onToggle }) {
    const toggleAccordion = () => {
        onToggle(!isOpen);
    };
    return (
        <div className={`transition accordion-item ${isOpen ? 'bg-white' : ''} ${isOpen ? 'text-rojo-100' : 'text-white'}`}>
    {/* <div className={`transition w-3/4 ${isOpen ? 'bg-white' : ''} ${isOpen ? 'text-rojo-100' : 'text-white'}`}> */}

        <div className={`w-full hover:bg-white hover:text-rojo-100 accordion-header cursor-pointer transition flex justify-between space-x-5 px-4 items-center h-10  border-b border-white`} onClick={toggleAccordion}>
            <h3 className={`tituloObra hover:text-rojo-100 ${isOpen ? 'text-rojo-100' : ''}`}>{title}</h3>
            <p className='tituloObra pr-8'>{isOpen ? '-' : '+'}</p>
        </div>
        <div className={`w-full bg-gray-700 text-white border-b border-white accordion-content pt-6 px-6 overflow-hidden ${isOpen ? 'max-h-full' : 'max-h-0 hidden'}`}>
            {content.map((e, index) => (
                <div key={index} className='flex flex-col items-start justify-center py-2 pl-2'>
                    <p className="detalleObra text-start font-bold">{e.title}</p>
                    <p className="detalleObra text-start">{e.finalizada? "Obra finalizada " + e.finalizada :"Obra en ejecución" }</p>
                </div>
            ))}
        </div>
    </div>
    );
    }
const [openItemIndex, setOpenItemIndex] = useState(-1);

const handleToggle = (index) => {
if (openItemIndex === index) { setOpenItemIndex(-1); // Close the item if it's already open
} else {setOpenItemIndex(index)}
};

const accordionItemsData = [
{
    title: "Aeropuerto Salta (AA2000)",
    content: [
    {title:"Construcción de nuevas rentadoras Low Cost", finalizada:"Agosto 2022"}, 
    {title:"Refacción de alcantarillas en zona de pista de aterrizaje", finalizada:"Enero 2023"}, 
    {title:"Remodelación Sala Vip Aeropuerto Salta", finalizada:""}, 
],
    
},
{
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
],
    
},
{
    title: "MEBAC - Tienda de Informática",
    content: [
    {title:"Construcción de nuevo depósito y oficinas administrativas", finalizada:"Mayo 2023"}, 
     
],
},

{
    title: "Proyecto Conectar Salta 1 - convenio con Saltic S.E.",
    content: [
    {title:"Instalación de shelters y de fibra óptica que amplía la conectividad para las provincias de Salta, Jujuy y Tucumán", finalizada:"Junio 2023"}, 
],
    
},
{
    title: "Fernando Yarade y Asociados S.R.L.",
    content: [
    {title:"Refacciones varias", finalizada:"Noviembre 2022"}, 
    {title:"Refacciones Varias -  Consultora Pluss", finalizada:"Julio 2023"}, 
],
    
},
{
    title: "INVLAC Construcciones SRL",
    content: [
    {title:"Construcción de Vivienda Unifamiliar. Vivienda Cernusco. Salta Capital, Barrio Privado La Reserva. 327,5 m2", finalizada:""}, 
    {title:"Construcción de Vivienda Unifamiliar. Vivienda Leyton. Salta Capital, Barrio La Trinidad 176,8 m2", finalizada:""}, 
    {title:"Construcción de Vivienda Unifamiliar. Estancia Ivael. Salta Chicoana. 365 m2", finalizada:"Agosto 2023"}, 
],
    
},
{
    title: "Seil Engineering",
    content: [
    {title:"Cerramiento nave Industrial Proyecto Posco Downstream", finalizada:""}, , 
],
    
},
{
    title: "Weiss Salta SAS",
    content: [
    {title:"Construcción local comercial. Salta Capital. 210 m2", finalizada:""}, 
],
    
},

]; 

return (
    <>
    
<div id="Obras" className='flex sm:hidden' style={{width:"auto",maxHeight:"100vh",backgroundImage: `url(${fondo})`, backgroundSize:"cover",width:"100vw"
}}>
    <div className='flex w-full justify-center items-center py-16' >
       {/*  <div className="w-1/3 flex flex-col items-center" >
            <img src={TIULOOBRA} alt="" className="w-40"/>
            <img src={CASCOOBRA} alt="" className="w-80"/>
        </div> */}

        <div className="w-full flex flex-col justify-center items-center h-screen">
            <div style={{height:"90vh", overflowY:'auto'}} className='flex flex-col justify-between'>
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
    </div>
</div>
    
    
<div id="Obras" style={{width:"auto"}} className='hidden sm:flex'>
    <div className='flex flex-col items-center w-full justify-center bg-azul-100 py-16 px-32' >
        <img src={CASCOOBRA} alt="" className="w-60"/>

    <div className='flex items-center justify-between'>
        <div className='flex justify-start'>
            <p className='tituloObras'>OBRAS</p>
        </div>
        <div className='flex pl-16'>
            <Accordion/>
        </div>
    </div>
       
    </div>

   {/*  <img src={banda} alt="" className="pb-4 w-full h-16"/> */}
</div>

</>
);}

export default Obras;