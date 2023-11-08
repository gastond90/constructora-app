import React, { useState } from 'react';
import fortisLogoBlanco from '../Img/LogoFortisblanco.png'
import flechaBlanca from '../Img/flecha blanca.png'
import evo from '../Img/construccionevolucion.png'

function Contacto() {

    const [asunto, setAsunto] = useState("");
    const [cuerpo, setCuerpo] = useState("");

    const sendEmail = () => {
        const email = `mailto:your-email@example.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
        window.location.href = email;
      };

    return ( 
    <div id="Contacto" style={{width:"auto",height:"100vh"}}>
        <div className=' flex flex-col items-center w-full justify-start h-full'>
            <p className='pcontacto w-1/2' style={{fontSize:"3rem", fontWeight:"bolder", textAlign:'start'}}>
                CONTACTO
            </p>
            <div className='w-1/2 my-4'>
                <input type="text" name="subject" placeholder="Asunto *" onChange={(e)=>{setAsunto(e.target.value)}} className='input border border-black border-2 p-4 flex w-full justify-start my-4'/>
                <textarea name="body" placeholder="Mensaje *"  onChange={(e)=>{setCuerpo(e.target.value)}}  className='input border border-black border-2 p-4 flex w-full justify-start py-4 h-32'/>
            </div>

            <div className='w-1/2 justify-start my-2'>
                <button className='enviar' onClick={sendEmail}>Enviar</button>
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
    </div> );
}

export default Contacto;