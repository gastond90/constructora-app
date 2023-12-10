import React from 'react';

function ButtonObra({text, onClick}) {
    return ( 
    <button onClick={onClick} style={{fontSize:"8px"}} className="h-8 bg-white hover:bg-gray-200 font-semibold py-2 px-4 rounded-2xl my-2 flex justify-between items-center mr-2">
        <p className="flechamini">↘</p><p className="w-full textButton text-start pl-2">{text}</p>
    </button>
    );
}

export default ButtonObra;