import React from "react";

function SellerEarnings() {

  const earningsSummary = {
    totalEarnings: 1240,
    pendingPayout: 300,
    completedPayout: 940,
  };



  return (
    <div className="container mt-4">
      <h3>Seller Earnings</h3>

      <div className="row my-3">
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Total Earnings</h6>
              <p className="card-text display-6">${earningsSummary.totalEarnings}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Pending Payout</h6>
              <p className="card-text display-6">${earningsSummary.pendingPayout}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h6 className="card-title">Completed Payout</h6>
              <p className="card-text display-6">${earningsSummary.completedPayout}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SellerEarnings;
