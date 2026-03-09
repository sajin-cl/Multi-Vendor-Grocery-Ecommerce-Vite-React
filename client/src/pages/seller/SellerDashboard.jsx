import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { motion } from 'framer-motion';
import { cardContainer, droppingCard } from '@/animations/globalVariants'
import { getSellerDashboard } from "@/services/sellerService";



function SellerDashboard() {


  document.title = ('Seller Dashboard | Power House Ecommerce');

  const [stats, setStats] = useState({
    sellerName: '',
    totalProducts: 0,
    totalOrders: 0,
    pendingOrders: 0,
    totalEarnings: 0,
  });


  const fetchSellerDashboardData = async () => {
    try {
      const response = await getSellerDashboard();
      setStats(response.data);
      console.log(response.data);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {

    fetchSellerDashboardData();

  }, []);


  return (
    <div className="container mt-4">
      <h5 className="border-bottom fw-bold mb-4 pb-2">Seller <span className="text-purple">Dashboard</span></h5>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Welcome back <strong>{stats?.sellerName}</strong>, Here's what's happening today
      </motion.p>
      <motion.div
        className="row my-3"
        variants={cardContainer} initial="hidden" animate="visible"
      >

        <Link className="col-md-3 mb-3" to={'/seller/products'}>
          <motion.div
            className="card text-center shadow-sm  p-2"
            style={{ backgroundColor: "var(--seller-dashboard-card)" }}
            variants={droppingCard} drag
          >
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text display-6">{stats.totalProducts}</p>
            </div>
          </motion.div>
        </Link>

        <Link className="col-md-3 mb-3" to={'/seller/orders'}>
          <motion.div
            className="card text-center shadow-sm  p-2"
            style={{ backgroundColor: "var(--seller-dashboard-card)" }}
            variants={droppingCard} drag
          >
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text display-6">{stats.totalOrders}</p>
            </div>
          </motion.div>
        </Link>

        <div className="col-md-3 mb-3">
          <motion.div
            className="card text-center shadow-sm p-2"
            style={{ backgroundColor: "var(--seller-dashboard-card)" }}
            variants={droppingCard} drag
          >
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text display-6">{stats.pendingOrders}</p>
            </div>
          </motion.div>
        </div>

        <Link className="col-md-3 mb-3" to={'/seller/earnings'}>
          <motion.div
            className="card text-center shadow-sm p-2"
            style={{ backgroundColor: "var(--seller-dashboard-card)" }}
            variants={droppingCard} drag
          >
            <div className="card-body">
              <h5 className="card-title ">Earnings</h5>
              <p className="card-text display-6" style={{ fontFamily: "Intel" }}>₹{stats.totalEarnings}</p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export default SellerDashboard;
