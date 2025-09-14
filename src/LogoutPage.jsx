import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={logout}>
        <label htmlFor="">Seguro de que quieres salir</label>
        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export { LogoutPage };
