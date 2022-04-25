import Footer from "../footer/footer"
import NavBar from "../header/NavBar"
const Ingresar = () => {
  return <>
    <NavBar />
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
  </>
}

export default Ingresar