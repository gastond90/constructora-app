import React from 'react';
import Facebook from './Facebook';
import Insta from './Insta';
import fortisLogoBlanco from '../Img/LogoFortisblanco.png'

function Footer() {
    return (
    <div id="footer" className='bg-rojo-100' style={{width:"auto",height:"25vh"}}>
        <div className='w-full h-full flex items-center flex-col sm:flex-row justify-evenly'>
            <div className='flex h-1/3 sm:w-1/3 sm:justify-center items-center flex-row'>
                <p className='pcontacto pr-4' style={{fontSize:"0.9rem"}}>
                    seguinos  
                </p>
                <Facebook/>
                <Insta/>
            </div>
            <div className='flex sm:w-1/3 sm:justify-center'>
                <img src={fortisLogoBlanco} alt="" className="w-44"/>
            </div>
            <div className='flex h-1/3 sm:w-1/3 sm:justify-center sm:justify-start items-center'>
                <p className='pcontacto' style={{fontSize:"0.9rem"}}>
                    → CONTACTO
                </p>
            </div>
        </div>
 </div>
 );
}

export default Footer;