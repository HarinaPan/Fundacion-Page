const NavBar = () => {
    return (
        <div className="container-fluid navbar-light bg-primary Navbar ">
            <div className="container">
                <a href="/" className="text-primary">
                    <h2>Logo</h2>
                </a>
            </div>
            <div className="container">
                <a href="#quienesSomos">
                    <h2>Quienes somos?</h2>
                </a>
            </div>
            <div className="container">
                <a href="#queHacemos">
                    <h2>Que Hacemos?</h2>
                </a>
            </div>
            <div className="container">
                <a href="#comoParticipar">
                    <h2>Como Participar?</h2>
                </a>
            </div>
            <div className="container">
                <a href="#novedades">
                    <h2>Novedades</h2>
                </a>
            </div>
            <div className="container">
                <a href="/Donaciones">
                    <h2>Donar aqui</h2>
                </a>
            </div>
            <div className="container">
                <a href="/Ingresar">
                    <h2>Ingresar</h2>
                </a>
            </div>
        </div>
    )
}

export default NavBar