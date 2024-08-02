import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/context/AuthContext";

export default function ProtectedRoute({
  children,
  redirectPath,
}: {
  children: ReactNode;
  redirectPath: string;
}) {
  const auth = useAuth();
  if (!auth.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
1;
