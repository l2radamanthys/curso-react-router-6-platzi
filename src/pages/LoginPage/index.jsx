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
      <div className="flex items-center justify-center mt-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-blue-600">
            Iniciar Sesión
          </h1>

          <form onSubmit={login} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-gray-700 text-sm font-medium">
                Escribe tu nombre de usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Usuario"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Entrar
            </button>
          </form>

          {loginError && (
            <p className="text-center text-red-500 text-sm font-medium">
              Error: usuario no válido.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export { LoginPage };
