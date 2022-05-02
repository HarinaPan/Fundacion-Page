

const FormularioIngreso = ({login, setLogin,loginError, setLoginError}) => {
    const loginSucces = () => {
        setLogin(true)
    }
    const loginFail = () => {
        setLoginError(true)
    }
  return (
    <div className="container col-md-6">
    <div className="container ">
      <h2>Login para administradores</h2>
    </div>
    <div className="form-group">
      <label className="form-label mt-4">Ingrese sus datos</label>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
    </div>
    <div>
      <button className="btn btn-primary mt-3" onClick={loginSucces}>Ingresar</button>
      <button className="btn btn-danger mt-3" onClick={loginFail}>IngresarError</button>
    </div>
    <div className="mt-3">
      <a href="/recuperarContraseña">Olvido su contraseña?</a>
    </div>
  </div>
  )
}

export default FormularioIngreso