import React, { useState } from 'react';
import evo from '../Img/construccionevolucionrojo.png'

function Contacto() {

    const [asunto, setAsunto] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const sendEmail = () => {
        const email = `mailto:your-email@example.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = email;
      };

      const sendWhatsAppMessage = () => {
        const phoneNumber = '5493875326762'; 
        const message = 'Hola!';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      
        window.open(url, '_blank');
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
                <p title='Escribinos' className='contactos cursor-pointer' onClick={sendWhatsAppMessage}>
                    TEL.<span style={{color:"red"}}>+3875 32-6762</span> 
                </p>
                <a title='Ver Mapa' className='contactos' target="_blank" href='https://www.google.com/maps/@-24.7703201,-65.4091162,3a,75y,319.84h,90t/data=!3m6!1e1!3m4!1saIVcZdlnn3miq9wJ1gVXyw!2e0!7i16384!8i8192?entry=ttu '>
                    DIRECCIÓN <span style={{color:"red", marginLeft:"1rem"}}>MITRE 1571</span> 
                </a>
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