import { useState } from "react";
import image1 from "./1.jpg";
import image2 from "./2.jpg";
import image3 from "./3.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
/* import image6 from '../../Img/03 ICONO GRUA.png'  */


/* const cards = [
  {
    header: "Canada",
    image: image6,
    text: `Image description here`,
  },
  {
    header: "Bali",
    image: image6,
    text: `Image description here`,
  },
  {
    header: "Spain",
    image: image6,
    text: `Image description here`,
  },
  {
    header: "Indonesia",
    image: image6,
    text: `Image description here`,
  },
  {
    header: "South Africa",
    image: image6,
    text: `Image description here`,
  },
]; */

const cards = [
  {
      header: "Aeropuerto Salta (AA2000)",
      content: [
      {title:"Construcción de nuevas rentadoras Low Cost", finalizada:"Agosto 2022"}, 
      {title:"Refacción de alcantarillas en zona de pista de aterrizaje", finalizada:"Enero 2023"}, 
      {title:"Remodelación Sala Vip Aeropuerto Salta", finalizada:""}, 
  ],
      
  },
  {
      header: "Hotel Salta",
      content: [
      {title:"Refacciones varias - Zona de lavandería", finalizada:"Mayo 2022"}, 
      {title:"Refacciones Varias - Zona de Cocinas", finalizada:"Enero 2023"}, 
  ],
      
  },
  {
      header: "MEBAC - Tienda de Informática",
      content: [
      {title:"Construcción de nuevo depósito y oficinas administrativas", finalizada:"Mayo 2023"}, 
       
  ],
  },
  
  {
      header: "Proyecto Conectar Salta 1 - convenio con Saltic S.E.",
      content: [
      {title:"Instalación de shelters y de fibra óptica que amplía la conectividad para las provincias de Salta, Jujuy y Tucumán", finalizada:"Junio 2023"}, 
  ],
      
  },
  {
      header :"Fernando Yarade y Asociados S.R.L.",
      content: [
      {title:"Refacciones varias", finalizada:"Noviembre 2022"}, 
      {title:"Refacciones Varias -  Consultora Pluss", finalizada:"Julio 2023"}, 
  ],
      
  },
  {
      header :"INVLAC Construcciones SRL",
      content: [
      {title:"Construcción de Vivienda Unifamiliar. Vivienda Cernusco. Salta Capital, Barrio Privado La Reserva. 327,5 m2", finalizada:""}, 
      {title:"Construcción de Vivienda Unifamiliar. Vivienda Leyton. Salta Capital, Barrio La Trinidad 176,8 m2", finalizada:""}, 
      {title:"Construcción de Vivienda Unifamiliar. Estancia Ivael. Salta Chicoana. 365 m2", finalizada:"Agosto 2023"}, 
  ],
      
  },
  {
      header :"Seil Engineering",
      content: [
      {title:"Cerramiento nave Industrial Proyecto Posco Downstream", finalizada:""}, , 
  ],
      
  },
  {
      header :"Weiss Salta SAS",
      content: [
      {title:"Construcción local comercial. Salta Capital. 210 m2", finalizada:""}, 
  ],
      
  },
  
  ]; 

export const Accordion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section>
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={isActive}
            onClick={() => handleToggle(index)}
          >
            <img /* src={card.image} */ src={image6}/>
            <div className="content">
              <div>
                <h2>{card.header}</h2>
                {/* <p>{card.text}</p> */}
                {card.content.map((e, index) => (
                <div key={index} className='flex flex-col items-start justify-center py-2 pl-2'>
                    <p className="detalleObra text-start font-bold">{e.title}</p>
                    <p className="detalleObra text-start">{e.finalizada? "Obra finalizada " + e.finalizada :"Obra en ejecución" }</p>
                </div>
            ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
