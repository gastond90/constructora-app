import React from 'react';
import img from '../../Img/obrasSingle/aeropuertoVista.png';
import casco from '../../Img/CASCO OBRA.png';
import VerObras from './VerObras';

function ObraAeropuerto() {
    return (
        <div className='w-full h-screen bg-azul-100 flex flex-col justify-center sm:flex-row lg:flex-row'>
        <div className='w-full sm:w-1/2 p-16 flex flex-col items-start justify-center'>
            <img src={casco} alt="" className="w-32"/>
            <p className='obraVista my-4'>Aeropuerto Salta (AA2000)</p>
            {triangulo}
            <p className='obraDesc mt-4'>Construcción de nuevas rentadoras</p>
            <p className='obraDesc2 mb-4'>Low Cost. Agosto 2022.</p>
            
            <p className='obraDesc mt-4'>Refacción de alcantarillas en zona de pista de aterrizaje.</p>
            <p className='obraDesc2 mb-4'>Obra finalizada. Enero 2023.</p>

            <p className='obraDesc mt-4'>Remodelación Sala Vip Aeropuerto Salta.</p>
            <p className='obraDesc2 mb-4'>En ejecución.</p>

            <VerObras/>
        </div>
        <div className='hidden sm:flex w-1/2' style={{backgroundImage: `url(${img})`, backgroundSize:"cover"}}>
        </div>
       
    </div>  );
}

export default ObraAeropuerto;

const triangulo =<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 100 100">
<rect x="0" y="0" width="100" height="100" fill="none" />
<polygon points="0,0 100,0 100,100 0,0" fill="#CF0709" />
</svg>