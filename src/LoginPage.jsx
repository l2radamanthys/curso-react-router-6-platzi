import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login(username);
    navigate("/profile");
  };

  return (
    <>
      <h1>LogIn</h1>
      <form onSubmit={login}>
        <label htmlFor="">Escribe tu nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };
