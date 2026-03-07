import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { checkSession as validateSessionService } from "@/services/authService";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role") || null);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    setRole(storedRole);
    if (token) {
      validateSessionService()
        .then(() => setLoggedIn(true))
        .catch(() => logout()); 
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logout = async () => {
    localStorage.clear();
    setLoggedIn(false);
    setRole(null);
    navigate("/login");
  };

  return { loggedIn, role, logout };
};