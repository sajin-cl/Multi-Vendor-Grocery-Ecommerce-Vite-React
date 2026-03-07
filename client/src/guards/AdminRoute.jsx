import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  if (role === "seller") return <Navigate to="/seller" replace />;
  if (role === "user") return <Navigate to="/" replace />;

  return <Outlet />;
}

export default AdminRoute;