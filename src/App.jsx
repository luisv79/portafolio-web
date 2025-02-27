import { Route, Routes } from "react-router-dom";

import Header from './components/Header'
import ContenidoArea from './views/ContenidoArea'
import Resumen from './views/Resumen'
import Works from './views/Works'
import Contacto from './views/Contacto'
import PersonalArea from './components/PersonalArea'
import Menu from './components/Menu'
function App() {


  return (
    <>
      <body className="theme">
        <div className="page-home">
          <div className="header-area">
            <Header />  
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
              <PersonalArea />
              </div>
              <div className="col-8">
              <div>
                  < Menu />
                  <Routes>
                    <Route path="/" element={<ContenidoArea />} />
                    <Route path="/resumen" element={<Resumen />} />
                    <Route path="/Portafolio" element={<Works />} />
                    <Route path="/contacto" element={<Contacto />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default App
