import "../style/header.css";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function UserHeader() {

  const { loggedIn, logout } = useAuth();


  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <img src="/logo-icon.png" alt="logo" style={{ height: "32px", width: "32px" }} className="me-2"/>
        <Link className="navbar-brand text-white fw-bold fs-6">
          <small>
            POWER <span className="text-warning">HOUSE</span>
          </small>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <i className="fa-solid fa-house fs-7 me-1"></i> Home
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    <i className="fa-solid fa-cart-shopping fs-7 me-1"></i> Cart
                  </Link>
                  
                </li>
                <li className="nav-item">
                  <Link to="/myorders" className="nav-link text-white">
                    <i className="fa-solid fa-bag-shopping fs-7 me-1"></i> Orders
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-sm-center">
                  <button
                    className="btn btn-danger btn-sm ms-3 px-3 py-0"
                    onClick={logout}
                  >
                    <i className="fa-solid fa-right-from-bracket fs-7 me-1"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    <i className="bi bi-person-plus-fill me-1"></i> Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Login
                  </Link>
                </li>
              </>
            )}
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default UserHeader;
