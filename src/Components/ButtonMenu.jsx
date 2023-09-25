import React, { useState, useEffect } from 'react';

function ButtonMenu({text, onClick}) {
    return ( 
    <button onClick={onClick} className="w-44 sm:w-52 h-8 bg-white hover:bg-gray-200 font-semibold py-2 px-4 rounded-2xl my-2 flex justify-between items-center">
        <p className="flechamini">→</p><p className="w-full textButton text-xs text-start pl-2">{text}</p>
    </button>
    );
}

export default ButtonMenu;