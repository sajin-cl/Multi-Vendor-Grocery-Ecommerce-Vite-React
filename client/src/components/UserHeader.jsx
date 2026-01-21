import { useState, useEffect } from "react";
import "../style/header.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function UserHeader() {

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/auth/check-session", { withCredentials: true })
      .then((res) => setLoggedIn(res.data.loggedIn))
      .catch((err) => {
        if (err.response) console.error(err.response?.data?.message)
        setLoggedIn(false)
      });
  }, []);


  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:4000/api/auth/logout", { withCredentials: true });
      setLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container-fluid">
        <img src="/logo.png" alt="logo" style={{ height: "32px", width: "32px" }} />
        <Link className="navbar-brand text-white fw-bold fs-6">
          <small>
            Power <span className="text-warning">House</span>
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
                Home
              </Link>
            </li>

            {loggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/myorders" className="nav-link text-white">
                    Orders
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-sm-center">
                  <button
                    className="btn btn-danger btn-sm ms-3 px-3 py-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
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
