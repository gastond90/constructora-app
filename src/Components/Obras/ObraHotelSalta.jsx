import React from 'react';
import img from '../../Img/obrasSingle/hotelVista.png';
import casco from '../../Img/CASCO OBRA.png';
import VerObras from './VerObras';

function ObraHotelSalta({setVer}) {
    return (
        <div className='w-full h-screen bg-azul-100 flex flex-col justify-center sm:flex-row lg:flex-row'>
        <div className='w-full sm:w-1/2 p-16'>
            <img src={casco} alt="" className="w-32"/>
            <p className='obraVista my-4'>Hotel Salta</p>
            {triangulo}
            <p className='obraDesc mt-4'>Refacciones varias - Zona de lavandería</p>
            <p className='obraDesc2 '>Obra finalizada.</p>
            <p className='obraDesc2 mb-4'>Mayo 2022.</p>
            
            <p className='obraDesc mt-4'>Refacciones varias - Zona de Cocinas</p>
            <p className='obraDesc2 '>Obra finalizada.</p>
            <p className='obraDesc2 mb-4'>Enero 2023.</p>
            
            <VerObras onClick={()=>setVer("all")}/>
        </div>
        <div className='hidden sm:flex lg:flex w-1/2' style={{backgroundImage: `url(${img})`, backgroundSize:"cover"}}>
        </div>
       
    </div>  );
}

export default ObraHotelSalta;

const triangulo =<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
<rect x="0" y="0" width="100" height="100" fill="none" />
<polygon points="0,0 100,0 100,100 0,0" fill="#CF0709" />
</svg>