import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  checkSession as validateSessionService } from "@/services/authService";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateSessionService()
        .then(() => setLoggedIn(true))
        .catch(() => {
          logout();
        });
    } else {
      setLoggedIn(false);
    }
  }, []);



  const logout = async () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");

  };

  return { loggedIn, logout };
};
