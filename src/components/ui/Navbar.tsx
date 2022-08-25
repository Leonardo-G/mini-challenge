import { Link } from "react-router-dom"

import "../../styles/UI/Navbar.css"

export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__urls">
                    <Link to="/">Inicio</Link>
                    <Link to="/contact">Contacto</Link>
                </div>
            </div>
        </nav>
    )
}
