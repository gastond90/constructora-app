import ResponsiveNavLink from '../Components/ResponsiveNavLink';
import NavLink from '../Components/NavLink';
import ApplicationLogo from '../Components/ApplicationLogo';
import ToggleSidebar from '../Components/SideBar/SideBar';

export default function NoAuthLayout({ header, children,showingNavigationDropdown, setShowingNavigationDropdown }) {

    return (
    <div className="min-h-screen bg-gray-100">
   {/*  <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="shrink-0 flex items-center">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </div>

                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink onClick={()=>setShowingNavigationDropdown('Inicio')} active={showingNavigationDropdown=='Inicio'}>
                            Inicio
                        </NavLink>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink  onClick={()=>setShowingNavigationDropdown('Proyectos')} active={showingNavigationDropdown=='Proyectos'}>
                            Proyectos
                        </NavLink>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink  onClick={()=>setShowingNavigationDropdown('Contacto')} active={showingNavigationDropdown=='Contacto'}>
                            Contacto
                        </NavLink>
                    </div>
                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink  onClick={()=>setShowingNavigationDropdown('Sobre Nosotros')} active={showingNavigationDropdown=='Sobre Nosotros'}>
                            Sobre Nosotros
                        </NavLink>
                    </div>
                </div>            

                <div className="-mr-2 flex items-center sm:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink onClick={()=>setShowingNavigationDropdown('Inicio')} active={showingNavigationDropdown=='Inicio'}>
                    Inicio
                </ResponsiveNavLink>
                <ResponsiveNavLink onClick={()=>setShowingNavigationDropdown('Proyectos')} active={showingNavigationDropdown=='Proyectos'}>
                    Proyectos
                </ResponsiveNavLink>
                <ResponsiveNavLink onClick={()=>setShowingNavigationDropdown('Contacto')} active={showingNavigationDropdown=='contacto'}>
                    Contacto
                </ResponsiveNavLink>
                <ResponsiveNavLink onClick={()=>setShowingNavigationDropdown('Sobre Nosotros')} active={showingNavigationDropdown=='Sobre Nosotros'}>
                    Nosotros
                </ResponsiveNavLink>
            </div>
        </div>
    </nav> */}
    <ToggleSidebar showingNavigationDropdown={showingNavigationDropdown} setShowingNavigationDropdown={setShowingNavigationDropdown}/>

    {header && (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
    )}

    <main>{children}</main>
    </div>
    );
}
