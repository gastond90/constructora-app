import React from 'react';
import grilla from '../Img/grilla.png'
import fortisLogo from '../Img/fortispalabra.png'
import fondoportada from '../Img/INICIO.png'
import resp from '../Img/INICIOResp.png'
import { Fade } from 'react-awesome-reveal';

function Inicio() {
return ( 
    <Fade duration={1500} cascade damping={0.1}>
<div id="Inicio" style={{width:"auto",backgroundImage: `url(${grilla})`, backgroundSize:"contain"}} className='mx-auto sm:flex sm:flex-col justify-between sm:h-screen lg:h-screen'>

    <div className='flex justify-end sm:pt-8 mb-8 pr-8 sm:pr-8'>
        <img src={fortisLogo} alt="" className="w-32"/>
    </div>
    <div className='flex justify-start'>
        <img src={fondoportada} alt="" className='w-full hidden sm:block lg:block'/>
        <img src={resp} alt="" className='w-full block sm:hidden lg:hidden'/>
    </div>
</div> 
</Fade>);
}

export default Inicio;