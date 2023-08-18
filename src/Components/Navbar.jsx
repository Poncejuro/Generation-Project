import React from 'react';
import '../styles/Navbar.css';

export const NavBar = () => {

    return (
      <>
        <nav className="navbar navbar-expand-lg">

          <div className="container-fluid">

            <div className='name'>
              <h1>Facetify</h1>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <div className='search-group'>
                <input className="search" type="search" placeholder='Buscar'/>
                <button className="btn btn-light" type="button" >
                <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link"  href="#">Eventos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Personas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contacto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Perfil</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Cuenta</a>
                </li>
              </ul>

              
            </div>

          </div>
        </nav>
      </>
      );
}

