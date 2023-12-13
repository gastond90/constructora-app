import React from 'react';
import ButtonObra from './ButtonObra';
import { Link } from 'react-router-dom';
import { useScreenSize } from '../../Utils/media-query';

function SingleObra({bg, text, link}) {

  const {Lg, XS, isMedium} = useScreenSize() 

    return (
    <div /* className='flex flex-col items-end justify-end  m-2 sm:m-4 m-8 h-48 w-40 sm:w-64 lg:w-80' */ className="flex flex-col items-end justify-end  m-2 sm:m-4 sm:m-8 h-48 w-32 sm:w-full m-4" style={{backgroundImage: `url(${bg})`, backgroundSize:"cover"}}>
      <Link to={link}>
        <ButtonObra text={text}/>
      </Link>
    </div>  );
}

export default SingleObra;

/* w-40 sm:w-64 lg:w-80 */