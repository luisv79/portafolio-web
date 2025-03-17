import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/img/logo-bostami.png' 
import MenuMovil from './MenuMovil'  
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <div className="container">
       <div className="row">
        <div className="col-6">
            <a className="logo" href=""><img src={Logo} alt="" /></a>
        </div>
        <div className="col-6 iconos-menu">
            <div className="modo">
        <FontAwesomeIcon icon={faMoon} />
            </div>
            <div className="btn-menu-movil" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
       </div>
       <div className="menu-movil-total">
        <div className="menu-movil">
            

                {isOpen && (
                    <MenuMovil />
                )}
            

        </div>
       </div>
       
       
       </div>
       
    );
    
}

export default Header;          