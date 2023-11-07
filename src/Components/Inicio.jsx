import React from 'react';
import Salta from './Salta';
import grilla from '../Img/grilla.png'
import fortisLogo from '../Img/fortispalabra.svg'
import fondoportada from '../Img/INICIO.png'

function Inicio() {
return ( 
<div id="Inicio" style={{width:"auto",height:"100vh", backgroundImage: `url(${grilla})`, backgroundSize:"contain", backgroundRepeat:"repeat-x"}} className='mx-auto'>
    {/* <div className='flex justify-end pr-4 sm:pr-8'>
        <Salta/>
    </div> */}
    <div className='flex justify-end pt-8 mb-9 pr-8 sm:pr-8'>
        <img src={fortisLogo} alt="" className="w-32"/>
    </div>
    <div className='flex justify-start'>
        <img src={fondoportada} alt="" className='w-full'/>
    </div>
</div> );
}

export default Inicio;