<<<<<<< HEAD
import Footer from "../footer/footer"
=======
import { useState } from "react"
>>>>>>> dev
import NavBar from "../header/NavBar"
import FormularioIngreso from "./FormularioIngreso.jsx"
import AdminPage from "../adminview/AdminPage.jsx"
const Ingresar = () => {
  const [login,setLogin] = useState(false)
  const [loginError, setLoginError] = useState(false)
  if(login===false) {
    if(loginError===false)
    return <>
    <NavBar />
<<<<<<< HEAD
    <div className="container col-md-6">
      <div className="container ">
        <h2>Login para administradores</h2>
      </div>
      <div className="form-group">
        <label className="form-label mt-4">Ingrese sus datos</label>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
      </div>
      <div>
        <button className="btn btn-primary mt-3">Ingresar</button>
      </div>
      <div className="mt-3">
        <a href="/recuperarContraseña">Olvido su contraseña?</a>
      </div>
    </div>
    <Footer />
=======
    <FormularioIngreso 
      login={login}
      setLogin={setLogin}
      loginError={loginError}
      setLoginError={setLoginError}
    />
    </>
    if(loginError===true) {
    return <>
    <NavBar/>
    <p>Credenciales incorrectas</p>
    <FormularioIngreso 
      login={login}
      setLogin={setLogin}
      loginError={loginError}
      setLoginError={setLoginError}
    />
    </>
    }}
  else
  return <>
    <NavBar/>
    <AdminPage/>
>>>>>>> dev
  </>
}

export default Ingresar