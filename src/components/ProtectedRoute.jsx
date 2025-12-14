// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary text-white text-xl font-semibold">
        Loading...
      </div>
    );

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}
