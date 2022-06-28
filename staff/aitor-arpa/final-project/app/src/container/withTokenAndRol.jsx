import { Navigate, useLocation } from "react-router-dom";
import getUserRole from "../logic/getUserRole";

// withToken
export const withTokenAndRol = (Component, token = true, rol = "admin") => {
  const deleteSessionStorageAndGoToLogin = () => {
    delete sessionStorage.token;
    return <Navigate to="/login" replace />;
  };

  const Render = () => {
    const location = useLocation().pathname;
    const role = sessionStorage.token
      ? getUserRole(sessionStorage.token)
      : null;
    return !sessionStorage.token && !token ? (
      <Component />
    ) : !sessionStorage.token ? (
      <Navigate to="/login" replace />
    ) : !sessionStorage && token ? (
      deleteSessionStorageAndGoToLogin()
    ) : sessionStorage.token &&
      role === "admin" &&
      location.includes("admin") ? (
      <Component />
    ) : sessionStorage.token &&
      role === "worker" &&
      !location.includes("admin") && // Quiza no ¿? ||
      !location.includes("/login") ? (
      <Component />
    ) : sessionStorage.token &&
      role === "admin" &&
      !location.includes("admin") ? (
      <Navigate to="/admin" replace />
    ) : (sessionStorage.token &&
        role === "worker" &&
        location.includes("admin")) ||
      location.includes("/login") ? (
      <Navigate to="/" replace />
    ) : (
      <Navigate to="/404" replace />
    );
  };
  // redirect
  return Render;
};
