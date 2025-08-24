// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// Simulated authentication hook
const useAuth = () => {
  // For demo: toggle this between true/false to simulate login
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    // Redirect to home or login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
