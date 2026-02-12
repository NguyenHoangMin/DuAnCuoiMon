import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProtectRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;

    if (!currentUser) {
      navigate("/login");
    }
  }, []);
  return children;
}

export default ProtectRoute;
