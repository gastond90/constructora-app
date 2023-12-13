import React from 'react';
import fondonos from '../Img/fondonosotros.png'
import flecha from '../Img/flecha.png'

function Nosotros() {
return ( 
<div id="Sobre Nosotros" className='h-screen sm:h-nos lg:h-screen sm:pt-32 lg:pt-32 flex flex-col justify-center sm:px-32 lg:px-32' style={{width:"auto",backgroundImage: `url(${fondonos})`, backgroundSize:"cover"}}>
    <div className=' flex sm:flex-col lg:flex-col items-center sm:items-start lg:items-start justify-center sm:justify-start lg:justify-start pt-16 sm:pt-8 lg:pt-0 ml-0 sm:ml-8 lg:ml-8 sm:w-2/5 lg:w-2/5'>
        <p className='tituloSobre'>SOBRE</p>
        <p className='tituloSobreBold sm:leading-[0rem] ml-2 sm:ml-0 lg:ml-0'>NOSOTROS</p>
        <img src={flecha} alt="" className="w-10 mt-16 mb-4 hidden sm:flex lg:flex"/>
    </div>
      
    <div className='flex flex-col justify-end pb-16 sm:pr-16 mr-0 sm:pr-0 w-full items-center sm:items-end mt-8 sm:mt-0 lg:mt-0'>
        <p className='textoNos text-center sm:text-justify w-5/6 sm:w-2/5 lg:w-3/5 text-xs sm:text-lg'>
            Somos una empresa de construcción formada por un equipo
            multidisciplinario. Buscamos complementar la ingeniería y la
            arquitectura con el afán de lograr la excelencia necesaria para
            cumplir con las exigencias de nuestros clientes.
        </p>
        <p className='textoNos mt-4 text-center sm:text-justify w-5/6 sm:w-2/5 lg:w-3/5 text-xs sm:text-lg'>
            Conformada por jóvenes profesionales con
            sobrada experiencia en obras de todo tipo,
            trabajamos con procesos dinámicos y modernos que nos permiten posicionarnos en el
            mercado actual de forma firme y solvente.
        </p>
    </div>
</div>  );
}

export default Nosotros;