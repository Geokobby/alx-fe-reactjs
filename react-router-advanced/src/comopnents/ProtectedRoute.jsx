// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If not logged in → redirect to home
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
