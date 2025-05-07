import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faDesktop, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'

function ContenidoArea() {
    return (
        <>
        <div className="area-contenido">
          <div className="acerca-area ps-4 pe-4 pt-4">
                <div className="acerca-area_titulo mb-5">
                     <h2>Acerca</h2>
                     <p>Desarrollador Web Full Stack con experiencia en diseño y desarrollo de interfaces optimizadas. Especializado en tecnologías como JavaScript, React, PostgreSQL, PHP y
MySQL, con conocimientos en e-commerce, optimización de rendimiento y experiencia de usuario.
Hábil en la resolución de problemas técnicos, integración de APIs y desarrollo de soluciones
escalables. Apasionado por la innovación tecnológica y el desarrollo de aplicaciones interactivas.</p>
                     
                </div>
          </div>
          <div className="acerca-area_descripcion ps-4 pe-4 mb-4">
            <div className="acerca-area_descripcion-titulo mb-3">
               <h3>Lo que hago</h3>
            </div>
                <div className="acerca-area_lo-que-hago mb-3">
                    <div className="row">

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faSwatchbook} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>Diseño de Interfaz</h4>
                                    <p>Creación de interfaces atractivas, funcionales y profesionales para web y mobile, aplicación y principios fundamentales del diseño visual como jerarquía, balance y contraste, y a construir sistemas de diseño con enfoque en usabilidad, accesibilidad y diseño responsivo. Habilidades clave como el uso de tipografía, color, grillas, atomic design y UI kits.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faCode} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>Programación web</h4>
                                    <p>Creación de aplicaciones web dinámicas. HTML5, CSS3 y JavaScript, diseño responsive y uso de APIs. PHP y MySQL para desarrollar aplicaciones con conexión a bases de datos, formularios dinámicos, validaciones, operaciones CRUD, manejo de sesiones, cookies y seguridad básica, sitio web responsive.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faDesktop} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>Front end</h4>
                                    <p>Construcción de interfaces web modernas con HTML, CSS, y JavaScript, control de versiones con Git y GitHub, técnicas de maquetación avanzadas con Flexbox, Grid y Media Queries para crear sitios responsivos. Uso de Bootstrap para agilizar el diseño y React para el desarrollo de aplicaciones web basadas en componentes, manejo de estados, eventos, rutas dinámicas y consumo de APIs externas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faDatabase} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>Backend</h4>
                                    <p>Construcción de servidores con Node.js y Express, creación de APIs REST robustas para conexión a bases de datos PostgreSQL. Manejo de operaciones complejas de consulta, inserción y modelado de datos con SQL. Implementación sistemas de autenticación y autorización de usuarios mediante JWT, pruebas unitarias con Jest y Supertest para garantizar la calidad de cada endpoint.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
          </div>
        </div>
        
        </>
    );
    
}

export default ContenidoArea;   