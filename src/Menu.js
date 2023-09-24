import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

function Menu() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link  className="navbar-brand" to="/">Mi Aplicación</Link >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link exact className="nav-link" to="/"  activeClassName="active"> Inicio</Link >
          </li>
       
          <li className="nav-item">
            <Link  className="nav-link" to="/registro"  activeClassName="active">Registro</Link >
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/depositos"  activeClassName="active">Depositos</Link >
          </li>
          {!localStorage.getItem('token') && <li className="nav-item">
            <Link  className="nav-link" to="/login"  activeClassName="active">Login</Link >
          </li>
          }
          {localStorage.getItem('token') && <li className="nav-item">
            <Link  className="nav-link" to="/salir"  activeClassName="active">Salir</Link >
          </li>
          }
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Menu;
