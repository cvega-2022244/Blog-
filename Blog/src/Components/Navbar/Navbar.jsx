import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                {/*<img src={logo} alt="Logo" />*/}
                Home
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/tecnologia">Tecnología</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/taller">Taller</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/practicaS">Práctica Supervisada</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
