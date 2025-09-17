import React from "react";
import { useAuth } from "../../auth";
import { useUserProfile } from "../../hooks/useUserProfile";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const userProfile = useUserProfile();
  const auth = useAuth();
  const { username } = useParams();
  const profileUsername = username || auth.user?.username;
  const profile = userProfile.getProfile(profileUsername);

  if (profile) {
    return (
      <>
        <h1>Profile</h1>
        <p>
          Nombre: {profile.first_name} {profile.last_name}
        </p>
        <p>Edad: {profile.age} años</p>
        <p>Pais: {profile.country}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>Profile</h1>
        <p>Perfil no encontrado.</p>
      </>
    );
  }
}

export { ProfilePage };
