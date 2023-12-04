
import {Link} from 'react-router-dom';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container">
          <Link to="/" className="nav-link">
          LMS
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active">
              Home
              </Link>
              <Link to="/all-courses" className="nav-link">
              Courses
              </Link>
              <Link to="/about" className="nav-link">
              About us
              </Link>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Instructors
                  </a>
                  <ul className="dropdown-menu">
                    <Link to="/instructor-login" className="dropdown-item"><i class="bi bi-box-arrow-in-left"></i>Instructor
                    Login
                    </Link>
                    <Link to="/instructor-dashboard" className="dropdown-item">
                    Dashboard
                    </Link>
                    <li><a className="dropdown-item" to="/instructor-logout">Logout{' '}<i className="bi bi-box-arrow-right"></i></a></li>
                  </ul>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <Link to="/user-login" className="dropdown-item"><i className="bi bi-box-arrow-in-left"></i>User
                    Login
                    </Link>
                    <Link to="/user-dashboard" className="dropdown-item">
                    Dashboard
                    </Link>
                    <li><a className="dropdown-item" to="/user-logout">Logout{' '}<i className="bi bi-box-arrow-right"></i></a></li>
                  </ul>
              </li>
             
            </div>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;