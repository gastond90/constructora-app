import React from 'react';
import ButtonObra from './ButtonObra';
import { Link } from 'react-router-dom';

function SingleObra({bg, text, /* onClick, */ link}) {
    return (
  /*   <div className='flex flex-col items-end justify-end flex-wrap mx-6 w-72 sm:w-64 h-48 m-8' style={{backgroundImage: `url(${bg})`, backgroundSize:"cover"}}> */
    <div className='flex flex-col items-end justify-end flex-wrap w-40 m-2 sm:m-8 lg:m-8 sm:w-64 h-48' style={{backgroundImage: `url(${bg})`, backgroundSize:"cover"}}>
    <Link to={link}>
    <ButtonObra /* onClick={onClick} */ text={text}/>
    </Link>
    </div>  );
}

export default SingleObra;