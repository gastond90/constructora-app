import React from 'react';
import fondonos from '../Img/fondonosotros.png'
import flecha from '../Img/flecha.png'

function Nosotros() {
return ( 
<div id="Sobre Nosotros" className='flex justify-center' style={{width:"auto",maxHeight:"100vh",height:"100vh", overflowY:'auto',backgroundImage: `url(${fondonos})`}}>
    <div className='w-2/3'>
        <div className='flex flex-col items-start justify-start my-2 pt-8 sm:pt-20 ml-8'>
            <p className='tituloSobre'>SOBRE</p>
            <p className='tituloSobreBold'>NOSOTROS</p>
        </div>
        <img src={flecha} alt="" className="w-10 mt-16 mb-4 ml-12"/>
       <div className='flex'>
            <div className='w-1/2'>
            </div>
            <div className='flex flex-col w-4/5 sm:w-2/3 justify-end pr-16 mr-0 sm:pr-0'>
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
</div>  );
}

export default Nosotros;