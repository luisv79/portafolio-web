import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons'
function Menu() {
    return (
        <>
        <div className="menu">
            <div className="main-menu">
                <nav className="main-menu-nav">
                <ul>
                <NavLink className="link-menu" to="/" ><div className="link-menu_item active"><span><FontAwesomeIcon icon={faUser} /></span><div> Acerca</div></div> </NavLink>
                <NavLink className="link-menu" to="/resumen"  > <div className="link-menu_item"><span><FontAwesomeIcon icon={faFile} /></span><div> Resumen</div></div></NavLink>
                <NavLink className="link-menu" to="/portafolio"  ><div className="link-menu_item"><span><FontAwesomeIcon icon={faBriefcase} /></span><div> Portafolio</div></div> </NavLink>
                <NavLink className="link-menu" to="/contacto"  ><div className="link-menu_item"><span><FontAwesomeIcon icon={faAddressBook} /></span><div> Contacto</div></div>  </NavLink>
                </ul>
                </nav>
            </div>
        </div>
        
        </>
    );
    
}

export default Menu;    