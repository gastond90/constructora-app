import React from 'react';
import Salta from './Salta';
import grilla from '../Img/grilla.png'
import fortisLogo from '../Img/fortispalabra.svg'
import fondoportada from '../Img/INICIO.png'
import resp from '../Img/INICIOResp.png'


function Inicio() {
return ( 
<div id="Inicio" style={{width:"auto",backgroundImage: `url(${grilla})`, backgroundSize:"contain"}} className='mx-auto sm:flex sm:flex-col justify-between sm:h-screen lg:h-screen'>

    <div className='flex justify-end sm:pt-8 mb-9 pr-8 sm:pr-8'>
        <img src={fortisLogo} alt="" className="w-32"/>
    </div>
    <div className='flex justify-start'>
        <img src={fondoportada} alt="" className='w-full hidden sm:block lg:block'/>
        <img src={resp} alt="" className='w-full block sm:hidden lg:hidden'/>
    </div>
</div> );
}

export default Inicio;