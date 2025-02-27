import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
        <ul>
        <Link to="/" > Acerca </Link>
        <Link to="/resumen"  > Resumen </Link>
        <Link to="/portafolio"  > Portafolio </Link>
        <Link to="/contacto"  > Contacto </Link>
        </ul>
        </>
    );
    
}

export default Menu;    