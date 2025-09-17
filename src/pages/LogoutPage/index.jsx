import React from "react";
import { useAuth } from "../../auth";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const auth = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    auth.logout();
    navigate("/");
  };

  const returnToDashboard = () => {
    navigate("/");
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Cerrar sesión</h1>

        <form onSubmit={logout} className="space-y-4">
          <label className="block text-gray-600">
            <b className="text-gray-900">{auth.user?.username}</b>, ¿seguro que
            quieres salir?
          </label>

          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
            >
              Salir
            </button>
            <button
              type="button"
              onClick={returnToDashboard}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export { LogoutPage };
