import React from "react";
import { Link } from "react-router-dom";

function SellerDashboard() {
  
  const stats = {
    totalProducts: 12,
    totalOrders: 8,
    pendingOrders: 3,
    totalEarnings: 1240,
  };


  return (
    <div className="container mt-4">
      <h3>Seller Dashboard</h3>

      <div className="row my-3">
        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm bg-warning p-2">
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text display-6">{stats.totalProducts}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center text-white shadow-sm bg-success p-2">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-6">{stats.totalOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm bg-danger text-white p-2">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text display-6">{stats.pendingOrders}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card text-center shadow-sm bg-info text-white p-2">
            <div className="card-body">
              <h5 className="card-title ">Earnings</h5>
              <p className="card-text display-6">${stats.totalEarnings}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
