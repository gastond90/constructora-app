import React from 'react';
import fondonos from '../Img/fondonosotros.png'
import flecha from '../Img/flecha.png'

function Nosotros() {
return ( 
<div id="Sobre Nosotros" className='flex flex-col justify-center px-32' style={{width:"auto",maxHeight:"100vh",height:"100vh", overflowY:'auto',backgroundImage: `url(${fondonos})`, backgroundSize:"cover"}}>
    <div className='flex flex-col items-start justify-start my-2 pt-8 sm:pt-20 lg:pt-4 ml-8 w-2/5'>
        <p className='tituloSobre'>SOBRE</p>
        <p className='tituloSobreBold'>NOSOTROS</p>
        <img src={flecha} alt="" className="w-10 mt-16 mb-4"/>
    </div>
      
    <div className='flex flex-col justify-end pb-16 pr-16 mr-0 sm:pr-0 w-full items-end'>
        <p className='textoNos text-start sm:text-justify w-2/5 lg:w-3/5'>
            Somos una empresa de construcción formada por un equipo
            multidisciplinario. Buscamos complementar la ingeniería y la
            arquitectura con el afán de lograr la excelencia necesaria para
            cumplir con las exigencias de nuestros clientes.
        </p>
        <p className='textoNos mt-4 text-start sm:text-justify w-2/5 lg:w-3/5'>
            Conformada por jóvenes profesionales con
            sobrada experiencia en obras de todo tipo,
            trabajamos con procesos dinámicos y modernos que nos permiten posicionarnos en el
            mercado actual de forma firme y solvente.
        </p>
    </div>
</div>  );
}

export default Nosotros;