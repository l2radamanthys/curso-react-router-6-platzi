import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth";
import "./Menu.css";

function Menu() {
  const auth = useAuth();
  return (
    <>
      <nav>
        <ul className="nav-menu">
          {routes.map((route) => {
            if (route.private && !auth.isAuthenticated) return null;
            if (route.publicOnly && auth.isAuthenticated) return null;

            return (
              <li key={route.to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

const routes = [];
routes.push({
  to: "/",
  text: "Home",
  private: false,
});
routes.push({
  to: "/blog",
  text: "Blog",
  private: false,
});
routes.push({
  to: "/profile",
  text: "Profile",
  private: true,
});
routes.push({
  to: "/login",
  text: "LogIn",
  private: false,
  publicOnly: true,
});
routes.push({
  to: "/logout",
  text: "LogOut",
  private: true,
});

export { Menu };
