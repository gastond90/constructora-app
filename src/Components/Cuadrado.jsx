import React from 'react';

function Cuadrado({text=null, img=null, width=null}) {
    return (
    <>
        <div className='w-full flex flex-col justify-start'>
        {text &&
            <>
            {triangulo}
            <p className='pcuadrado'>
            {text}
            </p>
        </>}
        {img &&
        <center>
        <img src={img} alt="" className="w-12"/>
        </center>
        }
        </div>
    </>  );
}

export default Cuadrado;

const triangulo =<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
<rect x="0" y="0" width="100" height="100" fill="none" />
<polygon points="0,0 100,0 100,100 0,0" fill="#CF0709" />
</svg>