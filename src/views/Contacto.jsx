import Formulario from '../components/Formulario';

function Contacto() {
    return (
        <>
        <div className="area-contenido">
        <div className="contacto-area ps-4 pe-4 pt-4">
        <div className="contacto-area_titulo">
                     <h2>Contacto</h2>
                </div>
                </div>
                <div className="contacto-area_descripcion ps-4 pe-4 pb-4">
                   <div className="contacto-area_descripcion-folmulario">
                      <h5 className="contacto-titulo">I'm always open to discussing produuct</h5>
                      <h5 className="contacto-titulo-b">design work or partnerships.</h5>

                     <Formulario />

                        

                   </div>
                </div>
                
        </div>
        
        </>
    );
    
}

export default Contacto;    