import React from "react";
import { Navigate } from "react-router-dom";

// usuarios con roles especiales si el usuario no esta en esta lista,
// tiene el rol "user" por defecto
const roleList = { juandc: "moderator", admin: "admin", camila: "moderator" };

const accessRoles = {
  user: ["can-create-post"],
  moderator: ["can-create-post", "can-edit-any-post"],
  admin: ["can-create-post", "can-edit-any-post", "can-delete-any-post"],
};

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const isAuthenticated = !!user;

  const login = (username) => {
    const role = roleList[username] || "user";
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  const hasPermission = (requiredPerm) => {
    const permList = accessRoles[user?.role] || [];
    return !!permList.find((perm) => perm === requiredPerm);
  };

  const auth = {
    user,
    isAuthenticated,
    hasPermission,
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
