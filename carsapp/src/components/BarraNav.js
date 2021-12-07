import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BarraNav = () => {
    return (
        <div>
            <Nav className="mb-5 bg-dark text-Light">
                <Link to="/Home" className="nav-link">Home</Link>
                <Link to="/Registro" className="nav-link">Registrar Vehiculo</Link>                
            </Nav>
        </div>
    )
}
export default BarraNav




