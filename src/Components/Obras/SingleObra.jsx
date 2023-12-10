import React from 'react';
import ButtonObra from './ButtonObra';

function SingleObra({bg, text, onClick}) {
    return (
    <div className='flex flex-col items-end justify-end flex-wrap mx-6 w-72 sm:w-64 h-48 m-8' style={{/* width:"auto", */backgroundImage: `url(${bg})`, backgroundSize:"cover"}}>
    
    <ButtonObra onClick={onClick} text={text}/>
    
    
    </div>  );
}

export default SingleObra;