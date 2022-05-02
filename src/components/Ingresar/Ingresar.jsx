import { useState } from "react"
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
  </>
}

export default Ingresar