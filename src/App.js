import "bootswatch/dist/cerulean/bootstrap.min.css";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Donaciones from "./components/donaciones/Donaciones"
import Ingresar from "./components/Ingresar/Ingresar"

function App() {
  
  return <>

  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/Donaciones" element={<Donaciones />}/>
      <Route path="/Ingresar" element={<Ingresar />}/>
    </Routes>
  </Router>
  
  </>
}

export default App;
