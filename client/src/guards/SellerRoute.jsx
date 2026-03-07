import { Navigate, Outlet } from "react-router-dom";

function SellerRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  if (role === "admin") return <Navigate to="/admin" replace />;
  if (role === "user") return <Navigate to="/" replace />; 

  return <Outlet />;
}

export default SellerRoute;