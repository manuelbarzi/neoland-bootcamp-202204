import { Navigate } from "react-router-dom";

// withToken
export const withTokenAndRol = (Component) => {
  const Render = () => {
    return sessionStorage.token ? (
      <Component />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  // redirect
  return Render;
};