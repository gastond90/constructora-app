import React  from 'react';
import evo from '../Img/construccionevolucionrojo.png'
import { Fade } from "react-awesome-reveal";


function Contacto() {

const sendWhatsAppMessage = () => {
const phoneNumber = '5493875326762'; 
const message = 'Hola!';
const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

window.open(url, '_blank');
};
    return ( 
    <Fade duration={1500} cascade damping={0.1}>
    <div id="Contacto" className='w-auto flex'>
        <div className=' flex flex-col items-center w-full h-full justify-center'>
            <div className='flex w-full sm:w-1/2 justify-start pl-4 sm:pl-0 lg:w-3/4'>
                <p className='pcontacto sm:w-1/2 text-2xl sm:text-5xl' style={{ fontWeight:"bolder"}}>
                    CONTACTO
                </p>
            </div>
            <section id="contact" className="contact flex">
                <div className="flex flex-col sm:flex-row lg:flex-row justify-around w-full" >

                <div className="flex sm:w-1/2 pt-4 items-center justify-center sm:justify-start lg:justify-start sm:pl-20">  
                    <div className="info">
                    <a title='Ver Mapa' className='contactos' target="_blank" rel="noreferrer" href='https://www.google.com/maps/@-24.7703201,-65.4091162,3a,75y,319.84h,90t/data=!3m6!1e1!3m4!1saIVcZdlnn3miq9wJ1gVXyw!2e0!7i16384!8i8192?entry=ttu '>
                    <div className="address cursor-pointer">
                      <i className="bi bi-geo-alt"></i>
                        <h4>UBICACIÓN:</h4>
                        <p>MITRE 1571, Salta, Argentina, 4400</p>
                    </div>
                    </a>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>fortis@fortis.com</p>
                    </div>

                    <div className="phone cursor-pointer" title='Escribinos' onClick={sendWhatsAppMessage}>
                        <i className="bi bi-phone"></i>
                        <h4>Teléfono:</h4>
                        <p>+54 9387 5326762</p>
                    </div>
                </div>
                    
                </div>  
                <div className='flex items-center justify-center pt-4 mb-8'>
                    <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.732135498792!2d-65.41177742600661!3d-24.770371707117253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3c39eca424d%3A0x3b58d7e89345ebcd!2sBartolom%C3%A9%20Mitre%201561%2C%20Salta!5e0!3m2!1ses-419!2sar!4v1702431769150!5m2!1ses-419!2sar" width="450" height="350"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
            </section>
        </div>
        <div className=''>
            <img src={evo} alt="" className="h-48 m-8 mt-12 hidden sm:block"/>
        </div>
        
    </div>
    </Fade> );
}

export default Contacto;