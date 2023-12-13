import React from 'react';
import aeropuerto from '../Img/obrasSingle/aeropuerto.png'
import conectar from '../Img/obrasSingle/conectar.png'
import hotelSalta from '../Img/obrasSingle/hotelSalta.png'
import mebac from '../Img/obrasSingle/mebac.png'
import seil from '../Img/obrasSingle/seil.png'
import yarade from '../Img/obrasSingle/yarade.png'
import SingleObra from './Obras/SingleObra';

function Obras() {

const ITEMS = [
{
    title: "Aeropuerto Salta (AA2000)",
    content: [
    {title:"Construcción de nuevas rentadoras Low Cost", finalizada:"Agosto 2022"}, 
    {title:"Refacción de alcantarillas en zona de pista de aterrizaje", finalizada:"Enero 2023"}, 
    {title:"Remodelación Sala Vip Aeropuerto Salta", finalizada:""}, 
]   ,
    img:aeropuerto,
    link:"AA2000"
},
{
    title: "Hotel Salta",
    content: [
    {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
    {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
],
    img:hotelSalta,
    link:"HotelSalta"
},
{
    title: "MEBAC",
    content: [
    {title:"Construcción de nuevo depósito y oficinas administrativas", finalizada:"Mayo 2023"}, 
     
],
    img:mebac,
    link:"MEBAC"
},

{
    title: "Proyecto Conectar",
    content: [
    {title:"Instalación de shelters y de fibra óptica que amplía la conectividad para las provincias de Salta, Jujuy y Tucumán", finalizada:"Junio 2023"}, 
],
    img:conectar,
    link:"ProyectoConectar"
},
{
    title: "Fernando Yarade y Asociados S.R.L.",
    content: [
    {title:"Refacciones varias", finalizada:"Noviembre 2022"}, 
    {title:"Refacciones Varias -  Consultora Pluss", finalizada:"Julio 2023"}, 
],
    img:yarade,
    link:"FYyAS"
},
/* {
    title: "INVLAC Construcciones SRL",
    content: [
    {title:"Construcción de Vivienda Unifamiliar. Vivienda Cernusco. Salta Capital, Barrio Privado La Reserva. 327,5 m2", finalizada:""}, 
    {title:"Construcción de Vivienda Unifamiliar. Vivienda Leyton. Salta Capital, Barrio La Trinidad 176,8 m2", finalizada:""}, 
    {title:"Construcción de Vivienda Unifamiliar. Estancia Ivael. Salta Chicoana. 365 m2", finalizada:"Agosto 2023"}, 
],
    
}, */
{
    title: "Seil Engineering",
    content: [
    {title:"Cerramiento nave Industrial Proyecto Posco Downstream", finalizada:""},
],
    img:seil,
    link:"Seil"
},

]; 

return (
    <>
    <div id="Obras" className=' sm:bg-servicios w-full' style={{backgroundSize:"cover"}}>
        <div className='flex sm:hidden lg:hidden bg-azul-100 w-full h-32 items-center'>
            <p className='tituloObras2 pl-4' style={{color:"white"}}>OBRAS</p>
        </div>
        <div className='flex flex-col items-center w-full justify-center py-16 '>
            <p className='tituloObras2 hidden sm:flex lg:flex mb-8'>↘ OBRAS</p>
            <div className='flex flex-wrap lg:px-36 w-full justify-center'>
                {ITEMS.map(item=>
                <div key={item.text + item.title} className='sm:w-1/3'>
                    <SingleObra bg={item.img} text={item.title} link={item?.link}/>
                </div>)}
            </div>
        </div>
    </div>
</>
);}

export default Obras;