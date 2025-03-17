import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons'

function MenuMovil() {
    return (
       <>
       <div className="menu-movil_bar">
       <nav className="movil-nav">
        <ul>
           <NavLink className="link-menu_movil" to="/" ><div className="link-menu_item_movil active"><span><FontAwesomeIcon icon={faUser} /></span><div> Acerca</div></div> </NavLink>
           <NavLink className="link-menu_movil" to="/resumen"  > <div className="link-menu_item_movil"><span><FontAwesomeIcon icon={faFile} /></span><div> Resumen</div></div></NavLink>
           <NavLink className="link-menu_movil" to="/portafolio"  ><div className="link-menu_item_movil"><span><FontAwesomeIcon icon={faBriefcase} /></span><div> Portafolio</div></div> </NavLink>
            <NavLink className="link-menu_movil" to="/contacto"  ><div className="link-menu_item_movil"><span><FontAwesomeIcon icon={faAddressBook} /></span><div> Contacto</div></div>  </NavLink>
       </ul>
       </nav>
       </div>
       </>
        
    );       
    
}

export default MenuMovil;