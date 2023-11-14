import React, { useState } from 'react';
import fortisLogoBlanco from '../Img/LogoFortisblanco.png'
import flechaBlanca from '../Img/flecha blanca.png'
import evo from '../Img/construccionevolucionrojo.png'

function Contacto() {

    const [asunto, setAsunto] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const sendEmail = () => {
        const email = `mailto:your-email@example.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = email;
      };

    return ( 
    <div id="Contacto" className='sm:h-screen w-auto flex'>
        
        <div className=' flex flex-col items-center w-full justify-start h-full'>
            <div className='flex w-full sm:w-1/2 justify-start pl-4 sm:pl-0 pt-16 sm:pt-32'>
            <p className='pcontacto sm:w-1/2 text-2xl sm:text-5xl' style={{ fontWeight:"bolder"}}>
                CONTACTO
            </p>
            </div>
            
            <div className='w-11/12 sm:w-1/2 my-4'>
                <input type="text" name="subject" placeholder="Asunto *" onChange={(e)=>{setAsunto(e.target.value)}} className='input border border-black border-2 p-4 flex w-full justify-start my-4'/>
                <textarea name="body" placeholder="Mensaje *"  onChange={(e)=>{setCuerpo(e.target.value)}}  className='input border border-black border-2 p-4 flex w-full justify-start py-4 h-32'/>
            </div>

            <div className='w-11/12 sm:w-1/2 justify-start my-2'>
                <button className='enviar' onClick={sendEmail}>Enviar</button>
                </div>
            <div className='w-11/12 sm:w-1/2 flex flex-col items-end sm:items-start mb-2'>
                <p className='contactos'>
                    TEL.<p style={{color:"red"}}>+3875 32-6762</p> 
                </p>
                <p className='contactos'>
                    DIRECCIÓN <p style={{color:"red", marginLeft:"1rem"}}>GRAND BOURG</p> 
                </p>
                <p className='contactos'>
                    SALTA, ARGENTINA
                </p>
            </div>
        </div>

        <div className=''>
            <img src={evo} alt="" className="h-48 m-8 mt-12 hidden sm:block"/>
        </div>
    </div> );
}

export default Contacto;