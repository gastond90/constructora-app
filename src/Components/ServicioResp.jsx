import React from 'react';
function ServicioResp({text}) {
    return ( 
    <div className=' h-10 bg-gris-100 m-4 p-6 flex items-center justify-start'>
    <p className="flechamini">↘</p><p className="ml-6 serviTexto text-xs text-start  text-bold">{text}</p>
    </div> );
}

export default ServicioResp;