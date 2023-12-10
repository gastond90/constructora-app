import React, { useState, useEffect } from 'react';

function ObraAeropuerto({setVer}) {
    return (
    <div className='w-full h-screen bg-azul-100'>
        <button onClick={()=>setVer("all")}>volver</button>
    </div>  );
}

export default ObraAeropuerto;