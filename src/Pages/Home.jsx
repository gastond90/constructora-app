import React, { useState } from 'react';
import NoAuthLayout from '../Layouts/NoAuthLayout';

export default function Home() {

const [showingNavigationDropdown, setShowingNavigationDropdown] = useState('Inicio');

return (
    <>
        <NoAuthLayout
            showingNavigationDropdown={showingNavigationDropdown}
            setShowingNavigationDropdown={setShowingNavigationDropdown}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{showingNavigationDropdown}</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {showingNavigationDropdown === 'Inicio' && <p>HOla</p>}
                {showingNavigationDropdown === 'Proyectos' && <p>Proyectos</p>}
                </div>
            </div>
        </NoAuthLayout>
    </>
    );
}
