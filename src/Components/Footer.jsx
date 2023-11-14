import React from 'react';
import Facebook from './Facebook';
import Insta from './Insta';
import fortisLogoBlanco from '../Img/LogoFortisblanco.png'
import Linkedin from './Linkedin';

function Footer({handleNavigation}) {
return (
    <div id="footer" className='bg-rojo-100 ' style={{width:"auto",height:"25vh"}} >
        <div className='w-full h-full flex items-center flex-col sm:flex-row justify-evenly sm:px-16 lg:px-16'>
            <div className='flex flex-col h-1/3 sm:w-1/5 sm:justify-center sm:justify-start items-center hidden sm:flex lg:flex'>
                <div className='flex flex-col items-start'>
                    <p className='footers' onClick={() => handleNavigation("Inicio")}>
                        Home
                    </p>
                    <p className='footers' onClick={() => handleNavigation("Sobre Nosotros")}>
                        Sobre Nosotros
                    </p>
                    <p className='footers' onClick={() => handleNavigation("Servicios")}>
                        Servicios
                    </p>
                    <p className='footers' onClick={() => handleNavigation("Obras")}>
                        Obras
                    </p>
                    <p className='footers' onClick={() => handleNavigation("Contacto")}>
                        Contacto
                    </p>
                </div>
            </div>
            <div className='flex sm:w-3/5 sm:justify-center'>
                <img src={fortisLogoBlanco} alt="" className="w-32 sm:w-44" onClick={() => handleNavigation("Inicio")}/>
            </div>
            <div className='flex h-1/3 sm:w-1/5 sm:justify-center items-center flex-row '>
                <Facebook/>
                <Insta/>
                <Linkedin/>
            </div>
        </div>
 </div>
 );
}

export default Footer;