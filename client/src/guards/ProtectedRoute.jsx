import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) return <Navigate to="/login" replace />;

  if (role === "seller") return <Navigate to="/seller" replace />;
  if (role === "admin") return <Navigate to="/admin" replace />;

  return <Outlet />;
}

export default ProtectedRoute;