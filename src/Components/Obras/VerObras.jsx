import React from 'react';
import { Link } from 'react-router-dom';

function VerObras({text=""}) {
    return ( 
    <Link to="/#Obras">
        <button  style={{fontSize:"8px",  border: '1px solid white'}} className="h-8 bg-azul-100 hover:bg-gray-200 font-semibold text white py-2 px-4 rounded-2xl my-2">
            <p className="w-full textButton text-start text-white text-xs">VER + OBRAS</p>
        </button>
    </Link>
    );
}

export default VerObras;