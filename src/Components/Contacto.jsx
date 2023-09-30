import React from 'react';
import fortisLogoBlanco from '../Img/LogoFortisblanco.png'
import flechaBlanca from '../Img/flecha blanca.png'
import fondocontacto from '../Img/fondoContacto.png'
import evo from '../Img/construccionevolucion.png'

function Contacto() {
    return ( 
    <div id="Contacto" style={{width:"auto",height:"100vh", backgroundImage: `url(${fondocontacto})`, backgroundSize:"cover", /* backgroundRepeat:"repeat-x" */}}>
        <div className='flex justify-center pt-32 mb-9 w-1/5'>
            <img src={fortisLogoBlanco} alt="" className="w-32"/>
        </div>
        <div className='flex w-full justify-between'>
            <div className='w-1/2 overflow-x-auto pl-8'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.356901544587!2d-65.41005502562398!3d-24.783229607614064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc23dc0d43c97%3A0x4a477eb300c563e4!2sFederico%20Lacroze%20982%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1694992061911!5m2!1ses-419!2sar" width="450" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='w-1/2 flex flex-col items-start justify-start'>
                <p className='pcontacto' style={{fontSize:"1.5rem", fontWeight:"bolder"}}>
                    CONTACTO
                </p>
                <p className='pcontacto' style={{fontSize:"0.9rem", fontWeight:"bolder"}}>
                    +3875 32-6762
                </p>
                <p className='pcontacto ' style={{fontSize:"0.9rem"}}>
                    INSTAGRAM <span style={{ fontWeight:"bolder"}}> FORTIS.SRL</span> 
                </p>
                <img src={flechaBlanca} alt="" className="w-24 py-8"/>
                <img src={evo} alt="" className="w-44 pl-8"/>
            </div>
        </div>
</div> );
}

export default Contacto;