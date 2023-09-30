import React, { useState } from 'react';
import CASCOOBRA from '../Img/CASCO OBRA.png'
import TIULOOBRA from '../Img/TITULO OBRA.png'
import banda from '../Img/banda_1.gif'

function Obras() {

function AccordionItem({ title, content, isOpen, onToggle }) {
    const toggleAccordion = () => {
        onToggle(!isOpen);
    };
    
    return (
    <div className={`transition w-3/4 ${isOpen ? 'bg-white' : ''} ${isOpen ? 'text-rojo-100' : 'text-white'}`}>
        <div className={`hover:bg-white hover:text-rojo-100 accordion-header cursor-pointer transition flex justify-between space-x-5 px-12 items-center h-10  border-b border-white`} onClick={toggleAccordion}>
            <h3 className={`tituloObra hover:text-rojo-100 ${isOpen ? 'text-rojo-100' : ''}`}>{title}</h3>
            <p className='tituloObra pr-8'>{isOpen ? '-' : '+'}</p>
        </div>
        <div className={`bg-gray-700 text-white border-b border-white accordion-content pt-8 px-10 overflow-hidden ${isOpen ? 'max-h-full' : 'max-h-0 hidden'}`}>
            {content.map((e, index) => (
                <div key={index} className='flex flex-col items-start justify-center py-2 pl-2'>
                    <p className="detalleObra text-start font-bold">{e.title}</p>
                    <p className="detalleObra text-start">Obra finalizada {e.finalizada}</p>
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
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
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
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
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
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
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
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
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
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
],
    
},

]; 

return (
<div id="Obras" className='bg-azul-100' style={{width:"auto",maxHeight:"100vh"/* ,height:"100vh" */}}>
    <div className='flex w-full justify-between pt-16'>
        <div className="w-1/2 mx-auto flex flex-col items-center">
            <img src={TIULOOBRA} alt="" className="w-40"/>
            <img src={CASCOOBRA} alt="" className="w-80"/>
        </div>

        <div className="w-1/2 mx-auto flex flex-col justify-center" /* style={{maxHeight:"60vh", overflowY:'auto'}} */>
            <div style={{maxHeight:"60vh", overflowY:'auto'}}>
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
    <img src={banda} alt="" className="pb-4 w-full"/>
</div>
);}

export default Obras;