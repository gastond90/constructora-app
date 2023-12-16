import React from 'react';
import ButtonObra from './ButtonObra';
import { Link } from 'react-router-dom';

function SingleObra({bg, text, link}) {
    return (
    <div className="flex flex-col items-end justify-end sm:m-4 sm:m-8 h-48 w-44 sm:w-full " style={{backgroundImage: `url(${bg})`, backgroundSize:"cover"}}>
      <Link to={link}>
        <ButtonObra text={text}/>
      </Link>
    </div>  );
}

export default SingleObra;
