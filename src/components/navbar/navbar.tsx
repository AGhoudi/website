import "./navbar.scss";

import logo from "../../assets/images/logo.png";

const Navbar: React.FunctionComponent = () => (    
  <nav className="navbar fixed-top navbar-expand-md navbar-light">
    <div id="navigation" className="container">
      <div id="brand" className="brand">
        <img src={logo} alt="main logo" className="brand__logo" />
        <a className="navbar-brand" href="#home">Ali</a>
      </div>        
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#discover">Me Découvrir</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Mes Compétences</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Mes Projets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Me Contacter</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;