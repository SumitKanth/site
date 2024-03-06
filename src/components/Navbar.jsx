import React from "react";
import logo from '../assets/logo.jpg';

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand nav_brand" href="/"> <img src={logo} alt="brand_img" /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active nav_link" aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active nav_link" aria-current="page" href="/">Jobs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle nav_link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Schemes
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/schemes">Schemes</a></li>
            <li><a className="dropdown-item" href="/jobs">Jobs</a></li>
          </ul>
        </li>        
      </ul>

      <input type="text" name="search" id="search" className="nav_search" placeholder="search here"/>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar