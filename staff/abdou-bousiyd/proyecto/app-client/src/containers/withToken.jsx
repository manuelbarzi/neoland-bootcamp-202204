import { Navigate } from "react-router-dom";

export const withToken = (Component) => {
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
