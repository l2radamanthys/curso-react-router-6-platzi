import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  console.log(auth.user);

  return (
    <>
      <h1>Profile</h1>
      <p>Bienvenido {auth.user?.username}</p>
    </>
  );
}

export { ProfilePage };
