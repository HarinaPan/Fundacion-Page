import './App.css';
import bootstrap from 'bootstrap'
import "bootswatch/dist/cerulean/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import QuienesSomos from "./components/quienes-somos/QuienesSomos.jsx"
import QueHacemos from "./components/que-hacemos/QueHacemos.jsx"
import ComoParticipar from "./components/como-participar/ComoParticipar"
import Novedades from "./components/novedades/Novedades.jsx"
import Donaciones from "./components/donaciones/Donaciones"
import Ingresar from "./components/Ingresar/Ingresar"
function App() {
  return <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/QuienesSomos" element={<QuienesSomos />}/>
      <Route path="/QueHacemos" element={<QueHacemos />}/>
      <Route path="/ComoParticipar" element={<ComoParticipar />}/>
      <Route path="/Novedades" element={<Novedades />}/>
      <Route path="/Donaciones" element={<Donaciones />}/>
      <Route path="/Ingresar" element={<Ingresar />}/>
    </Routes>
  </Router>
  </>
}

export default App;
