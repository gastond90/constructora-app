import ApplicationLogo from '../Components/ApplicationLogo';
import ToggleSidebar from '../Components/SideBar/SideBar';
import "../Components/SideBar/styles.css";
import ButtonMenu from '../Components/ButtonMenu';
import ShadeScreen from '../Components/ShadeScreen';

export default function NoAuthLayout({handleNavigation, isOpen,setIsOpen, children,showingNavigationDropdown, setShowingNavigationDropdown }) {
    
const toggleSidebar = () => {setIsOpen(!isOpen)};
    return (
    <div className="min-h-screen overflow-x-hidden" style={{maxWidth:"100vw"}}>
        {isOpen && <ShadeScreen toggleSidebar={toggleSidebar}/>}
        <nav className="bg-white border-b border-gray-100 block sm:hidden bg-rojo-100 shadow-m fixed top-0 left-0 z-50 w-full">
            <div className="mx-auto">
                <div className={`sticky top-0 flex justify-between h-16 bg-rojo-100 ${
                showingNavigationDropdown ? " bg-rojo-100" : ""
                }` } >
                    <div className="flex">
                        <div className="shrink-0 flex items-center"  onClick={() => handleNavigation("Inicio")} >
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </div>
                    </div>            

                    <div className={`-mr-2 flex items-center sm:hidden bg-rojo-100 ${showingNavigationDropdown ? " bg-rojo-100" : ""}`}>
                        <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className={`bg-rojo-100 inline-flex items-center justify-center p-2 pr-4 rounded-md text-gray-600  transition duration-150 ease-in-out ${
                            showingNavigationDropdown ? " bg-rojo-100" : ""
                            }`}
                        >
                            <svg className="h-6 w-6" stroke="white" fill="none" viewBox="0 0 24 24">
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
           <div
            className={`transition-height shadow-xl 'bg-rojo-100' ${
                showingNavigationDropdown ? 'transition-height-open bg-rojo-100 ' : 'bg-rojo-100'
            }`}
            >
                <div className="pb-3 space-y-1 ml-8 'bg-rojo-100'">
                    <ButtonMenu text={"Sobre Nosotros"} onClick={() => handleNavigation("Sobre Nosotros")}/>
                    <ButtonMenu text={"Servicios"}  onClick={() => handleNavigation("Servicios")}/>
                    <ButtonMenu text={"Obras"}  onClick={() => handleNavigation("Obras")}/>
                    <ButtonMenu text={"Contacto"}  onClick={() => handleNavigation("Contacto")}/>
                </div>
            </div>
        </nav>
        
       <ToggleSidebar isOpen={isOpen} setIsOpen={setIsOpen} handleNavigation={handleNavigation} showingNavigationDropdown={showingNavigationDropdown} setShowingNavigationDropdown={setShowingNavigationDropdown}/>

        <main className='sm:ml-1/18-screen'>{children}</main>
    </div>
    );
}
