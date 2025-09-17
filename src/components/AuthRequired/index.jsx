import React from "react";
import { useAuth } from "../../auth";
import { Navigate, useLocation } from "react-router-dom";

function AuthRequired(props) {
  const auth = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      auth.setRedirect(location.pathname);
    }
  }, []);

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export { AuthRequired };
