import React, { useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';
import grilla from '../Img/grilla.png'

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState('Inicio');

return (
    <>
        <NoAuthLayout
            showingNavigationDropdown={showingNavigationDropdown}
            setShowingNavigationDropdown={setShowingNavigationDropdown}
        >
          <div className="">
            <center className=" mx-auto ">
            {showingNavigationDropdown === 'Inicio' && <div style={{width:"auto",height:"100vh", backgroundImage: `url(${grilla})`, backgroundSize:"contain", backgroundRepeat:"repeat-x"}}>Hola</div>}
            {showingNavigationDropdown === 'Proyectos' && <p>Proyectos</p>}
            </center>
        </div>
        </NoAuthLayout>
    </>
    );
}
