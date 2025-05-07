import Imagen from "../assets/img/img.png";
import ImagenProOne from "../assets/img/DragAndList_Scream.png";
import ImagenProTwo from "../assets/img/desert-cart.png";
import ImagenProtree from "../assets/img/tip-calculator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faUser,
  faCode,
  faArrowUpRightFromSquare,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
function Works() {
  return (
    <>
      <div className="area-contenido">
        <div className="trabajos-area ps-4 pe-4 pt-4">
          <div className="trabajos-area_titulo mb-5">
            <h2>Portafolio</h2>
          </div>
          <div className="trabajos-area_descripcion ps-4 pe-4 mb-4">
            <div className="row">
              <div className="col-12">
                <p>portafolio</p>
              </div>
              <div className="col-12">
                <div className="trabajos-portafolio">
                  <div className="trabajos-portafolio_muestras">
                    <div className="trabajos-portafolio_muestras-item">
                      <div
                        className="trabajo-portafolio-cursor"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalone"
                      >
                        <div className="portafolio-item">
                          <img src={ImagenProOne} alt="" />
                          <span>App lista de tareas</span>
                          <h6>Drag and List</h6>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModalone"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                          <div className="modal-content text-bg-dark">
                            <div className="modal-body">
                              <h6 className="modal-titulo">Drag and List</h6>
                              <div className="portfolio-modal-table">
                                <div className="row">
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faFile} /> Project
                                      : <span>App lista tareas</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faUser} /> Cliente
                                      : <span>Proyecto personal</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faCode} /> Langages
                                      :{" "}
                                      <span>
                                        Javascript, React, ExPress, SQL
                                        Postgress
                                      </span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                      />{" "}
                                      Preview :{" "}
                                      <a
                                        href="https://dragandlist.netlify.app/"
                                        target="_blank"
                                      >
                                        dragandlist.netlify.app
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="h1-modal-paragraph">
                                <p>
                                  {" "}
                                  una aplicación web tipo Trello construida
                                  desde cero, donde he puesto en práctica
                                  habilidades Full Stack aplicando diseño,
                                  lógica y despliegue en un entorno real de
                                  producción. En este proyecto se puede: Crear
                                  tableros (boards) Crear listas por tablero
                                  Crear tareas por lista Mover tareas entre
                                  listas Reordenar listas Todo conectado a una
                                  base de datos PostgreSQL
                                </p>
                              </div>
                              <div className="h1-modal-img">
                                <img src={ImagenProOne} alt="" />
                              </div>
                            </div>
                          </div>

                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-bs-dismiss="modal"
                            >
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                      <div
                        className="trabajo-portafolio-cursor"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModaltwo"
                      >
                        <div className="portafolio-item">
                          <img src={ImagenProTwo} alt="" />
                          <span>Lista de producto con carrito de compras</span>
                          <h6>Dessert</h6>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModaltwo"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                          <div className="modal-content text-bg-dark">
                            <div className="modal-body">
                              <h6 className="modal-titulo">
                                Product List with Cart
                              </h6>
                              <div className="portfolio-modal-table">
                                <div className="row">
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faFile} /> Project
                                      : <span>website</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faUser} /> Client :{" "}
                                      <span>Proyecto personal</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faCode} /> Langages
                                      :{" "}
                                      <span>Javascript, react, bootstrap</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                      />{" "}
                                      Preview :{" "}
                                      <a
                                        href="https://product-list-79.netlify.app/"
                                        target="_blank"
                                      >
                                        product-list-79
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="h1-modal-paragraph">
                                <p>
                                  El proyecto{" "}
                                  <strong>Product List with Cart</strong> es una
                                  aplicación web desarrollada con React que
                                  permite a los usuarios visualizar una lista de
                                  postres y gestionarlos en un carrito de
                                  compras. La aplicación está diseñada con un
                                  enfoque modular, siguiendo principios de
                                  desarrollo limpio y reutilizable. Tecnologías
                                  Utilizadas React: Utilizado para construir la
                                  interfaz de usuario de manera declarativa y
                                  basada en componentes. Bootstrap: Implementado
                                  para la maquetación y estilos, proporcionando
                                  un diseño responsivo y coherente. JavaScript
                                  (ES6+): Lenguaje principal para la lógica de
                                  la aplicación, aprovechando características
                                  modernas como funciones flecha y
                                  desestructuración. HTML5 y CSS3: Para la
                                  estructura y estilos básicos de la aplicación.
                                  JSON: Utilizado para almacenar y manejar los
                                  datos de los productos (postres).
                                </p>
                              </div>
                              <div className="h1-modal-img">
                                <img src={ImagenProTwo} alt="" />
                              </div>
                            </div>
                          </div>

                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-bs-dismiss="modal"
                            >
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                      <div
                        className="trabajo-portafolio-cursor"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModaltree"
                      >
                        <div className="portafolio-item">
                          <img src={ImagenProtree} alt="" />
                          <span>App Calculadora de propinas</span>
                          <h6>Tip calculator</h6>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModaltree"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                          <div className="modal-content text-bg-dark">
                            <div className="modal-body">
                              <h6 className="modal-titulo">
                                Tip Calculator App
                              </h6>
                              <div className="portfolio-modal-table">
                                <div className="row">
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faFile} /> Project
                                      : <span>Calculadora de propinas</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faUser} /> Cliente
                                      : <span>Proyecto personal</span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon icon={faCode} /> Langages
                                      : <span>Html, css, Javascript </span>
                                    </h3>
                                  </div>
                                  <div className="col-md-6">
                                    <h3 className="portfolio-modal-table-text">
                                      <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                      />{" "}
                                      Preview :{" "}
                                      <a
                                        href="https://tip-calculator-lev.netlify.app/"
                                        target="_blank"
                                      >
                                        tip-calculator-lev
                                      </a>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="h1-modal-paragraph">
                                <p>
                                  {" "}
                                  El proyecto Tip Calculator App es una
                                  aplicación web interactiva diseñada para
                                  calcular de manera precisa y rápida la propina
                                  y el total a pagar por persona en una cuenta
                                  compartida. Desarrollada como parte de un
                                  desafío de Frontend Mentor, esta aplicación se
                                  enfoca en ofrecer una experiencia de usuario
                                  intuitiva y responsiva, adaptándose a
                                  diferentes dispositivos y tamaños de pantalla.
                                  Tecnologías Utilizadas HTML5 Semántico: Se
                                  empleó una estructura HTML semántica para
                                  mejorar la accesibilidad y la comprensión del
                                  contenido por parte de los motores de búsqueda
                                  y tecnologías asistivas. CSS3 con Flexbox y
                                  Grid: Se utilizó CSS moderno, incluyendo
                                  Flexbox y Grid, para crear un diseño
                                  responsivo y flexible que se adapta a diversas
                                  resoluciones de pantalla. GitHub JavaScript
                                  (ES6+): La lógica de la aplicación se
                                  implementó utilizando JavaScript moderno,
                                  aprovechando características como funciones
                                  flecha, desestructuración y manejo eficiente
                                  del DOM. Metodología BEM: Se adoptó la
                                  metodología BEM (Block, Element, Modifier)
                                  para nombrar las clases CSS, facilitando la
                                  mantenibilidad y escalabilidad del código.
                                  Flujo de trabajo Mobile-First: El diseño y
                                  desarrollo se abordaron con un enfoque
                                  mobile-first, asegurando una experiencia
                                  óptima en dispositivos móviles antes de
                                  escalar a pantallas más grandes.
                                </p>
                              </div>
                              <div className="h1-modal-img">
                                <img src={ImagenProtree} alt="" />
                              </div>
                            </div>
                          </div>

                          <div className="modal-header">
                            <button
                              type="button"
                              className="close"
                              data-bs-dismiss="modal"
                            >
                              <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* end modal */}
                    </div>
                  </div>

                  <div className="trabajos-portafolio_muestras">
                    <div className="trabajos-portafolio_muestras-item">
                      <div
                        className="trabajo-portafolio-cursor"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <div className="portafolio-item">
                          <img src={Imagen} alt="" />
                          <span>Próximo proyecto</span>
                          <h6>Próximamente</h6>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                      <div
                        className="trabajo-portafolio-cursor"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <div className="portafolio-item">
                          <img src={Imagen} alt="" />
                          <span>Próximo Proyecto</span>
                          <h6>Próximamente</h6>
                        </div>
                      </div>

                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* end modal */}
                    </div>
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

export default Works;
