import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth";
import "./Menu.css";

function Menu() {
  const auth = useAuth();
  return (
    <>
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-bold text-gray-900">Mi Blog</h1>
            </div>

            <div class="hidden md:flex items-center space-x-8">
              {routes.map((route) => {
                if (route.private && !auth.isAuthenticated) return null;
                if (route.publicOnly && auth.isAuthenticated) return null;

                return (
                  <NavLink
                    key={route.to}
                    className={({ isActive }) => {
                      if (isActive) {
                        return "text-red-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors";
                      } else {
                        return "text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors";
                      }
                    }}
                    to={route.to}
                  >
                    {route.text}
                  </NavLink>
                );
              })}
            </div>

            <div class="md:hidden">
              <button
                id="mobile-menu-button"
                class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <div id="mobile-menu" class="hidden md:hidden pb-4">
            <div class="flex flex-col space-y-2">
              <a
                href="#"
                class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Blogs
              </a>
              <a
                href="#"
                class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Perfil
              </a>
              <a
                href="#"
                class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Login
              </a>
              <a
                href="#"
                class="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors w-fit"
              >
                Regístrate
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}

const routes = [
  {
    to: "/",
    text: "Home",
    private: false,
  },
  {
    to: "/blog",
    text: "Blog",
    private: false,
  },
  {
    to: "/profile",
    text: "Profile",
    private: true,
  },
  {
    to: "/login",
    text: "LogIn",
    private: false,
    publicOnly: true,
  },
  {
    to: "/register",
    text: "Registrate",
    private: false,
    publicOnly: true,
  },
  {
    to: "/logout",
    text: "LogOut",
    private: true,
  },
];

export { Menu };
