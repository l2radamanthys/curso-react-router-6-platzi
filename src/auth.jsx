import React from "react";
import { Navigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const isAuthenticated = !!user;
  const login = (username) => {
    setUser({ username });
  };
  const logout = () => {
    setUser(null);
  };

  const auth = {
    user,
    isAuthenticated,
    login,
    logout,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRequired(props) {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return props.children;
}

export { AuthProvider, useAuth, AuthRequired };
