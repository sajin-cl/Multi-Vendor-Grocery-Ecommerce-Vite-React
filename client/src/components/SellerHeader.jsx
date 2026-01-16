import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/SellerHeader.css';

function SellerHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar navbar-light  sticky-top seller-navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="src/assets/images/logos/logo.png"
              alt="logo"
              style={{ height: "32px", width: "32px" }}
            />
            <span className="text-white fw-bold ms-2">Power <span className="text-warning">House</span></span>
          </div>

          <button
            className="btn d-lg-none"
            type="button"
            onClick={toggleSidebar}
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </nav>

  
      <div className={`sidebar bg-dark text-white ${sidebarOpen ? 'open' : ''}`}>
        <ul className="p-2">
          <li className="mb-3 mt-1">
            <Link to="/seller" className="text-white ">
              <i className="fa fa-tachometer me-2"></i> Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/seller/products" className="text-white">
              <i className="fa fa-cube me-2"></i> Products
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/seller/orders" className="text-white">
              <i className="fa fa-shopping-cart me-2"></i> Orders
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/seller/earnings" className="text-white">
              <i className="fa fa-money me-2"></i> Earnings
            </Link>
          </li>
          <li className="mt-3">
            <Link to="/logout" className="btn btn-danger btn-sm w-100">
              <i className="fa fa-sign-out me-1"></i> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar open on mobile */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default SellerHeader;
