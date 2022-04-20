const NavBar = () => {
    return (
        <div className="container-fluid navbar-light bg-primary Navbar ">
            <div className="container">
                <a href="/" className="text-primary">
                    <h2>Logo</h2>
                </a>
            </div>
            <div className="container">
                <a href="/QuienesSomos">
                    <h2>Quienes somos?</h2>
                </a>
            </div>
            <div className="container">
                <a href="/QueHacemos">
                    <h2>Que Hacemos?</h2>
                </a>
            </div>
            <div className="container">
                <a href="/ComoParticipar">
                    <h2>Como Participar?</h2>
                </a>
            </div>
            <div className="container">
                <a href="/Novedades">
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