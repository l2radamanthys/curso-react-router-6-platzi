import React from "react";
import { useUserProfile } from "./hooks/useUserProfile";

// usuarios con roles especiales si el usuario no esta en esta lista,
// tiene el rol "user" por defecto
const roleList = { juandc: "moderator", admin: "admin", camila: "moderator" };

const accessRoles = {
  user: ["can-create-post"],
  moderator: ["can-create-post", "can-edit-any-post"],
  admin: [
    "can-create-post",
    "can-edit-any-post",
    "can-delete-any-post",
    "can-edit-any-profile",
    "can-delete-any-profile",
  ],
};

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [redirect, setRedirect] = React.useState(null);
  const userProfile = useUserProfile();

  const isAuthenticated = !!user;

  const login = (username) => {
    const profile = userProfile.getProfile(username);
    if (profile) {
      setUser(profile);
      return true;
    }
    return false;
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
    redirect,
    setRedirect,
  };
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export { AuthProvider, useAuth };
