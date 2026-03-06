import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";
import { useCart } from "@/context/CartContext";
import { getUserProfile } from "@/services/userService";

const MotionLink = motion(Link);

function MyProfile() {
  const { cartCount } = useCart();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "My Profile | Power House Ecommerce";

    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 mb-3">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "60vh" }}
        >
          <HashLoader color="#6213c9" size={70} />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mt-5 mb-3">
        <p>Unable to load profile.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-3">
      <motion.h4
        className="mb-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Profile
      </motion.h4>

      <div className="row">
        <div className="border p-4 rounded shadow-sm text-center">
          <i className="fa fa-user-circle fa-8x text-violet mb-3"></i>

          <motion.h5
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {user.fullName}
          </motion.h5>

          <motion.p
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            {user.email}
          </motion.p>
        </div>

        <MotionLink
          to="/cart"
          className="border p-4 rounded shadow-sm d-flex justify-content-between position-relative mt-3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-dark">Cart</span>

          {cartCount > 0 && (
            <span
              className="badge rounded-pill bg-danger position-absolute"
              style={{
                fontSize: "0.6rem",
                padding: "5px 8px",
                top: "30px",
                right: "20px",
              }}
            >
              {cartCount}
            </span>
          )}
        </MotionLink>

        <MotionLink
          to="/myorders"
          className="border p-4 rounded shadow-sm d-flex justify-content-between mt-3"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-dark">My Orders</span>
        </MotionLink>

        <MotionLink
          to="/edit-profile"
          className="mt-3 btn btn-violet"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Edit Profile
        </MotionLink>
      </div>
    </div>
  );
}

export default MyProfile;