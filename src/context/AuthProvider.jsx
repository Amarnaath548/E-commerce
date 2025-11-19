import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (credentail) => {
    const { data } = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      credentail
    );
    console.log(data);
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const profile = async () => {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    const token = async () => {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/refresh-token",
          {
            headers: {
              Authorization: `Bearer ${refresh_token}`,
            },
          }
        );
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      } catch (error) {
        console.log(error);
      }
    };
    if (access_token) {
      profile();
    } else {
      token();
    }
  }, []);

  const value = { login, user, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
