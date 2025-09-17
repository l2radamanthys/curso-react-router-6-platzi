import React from "react";
import { useAuth } from "../../auth";
import { Navigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState("");
  const [loginError, setLoginError] = React.useState(false);

  const login = (e) => {
    e.preventDefault();
    const result = auth.login(username);
    setLoginError(!result);
  };

  if (auth.isAuthenticated) {
    if (auth.redirect) {
      const redirect = auth.redirect;
      auth.setRedirect(null);
      return <Navigate to={redirect} />;
    }
    return <Navigate to="/profile" />;
  }

  return (
    <>
      <h1>LogIn</h1>
      <form className="LoginPage-form" onSubmit={login}>
        <label htmlFor="">Escribe tu nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>

      {loginError && (
        <p className="LoginPage-error">Error usuario no valido.</p>
      )}
    </>
  );
}

export { LoginPage };
