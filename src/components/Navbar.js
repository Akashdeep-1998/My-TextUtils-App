import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
            style={{cursor:'pointer'}}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{cursor:'pointer'}}>Enable Dark Mode</label>
        </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
};

export default Navbar;
