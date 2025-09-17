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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-4">
          <h1 className="text-2xl font-bold text-blue-600 text-center">
            Perfil
          </h1>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Nombre:</span>{" "}
              {profile.first_name} {profile.last_name}
            </p>
            <p>
              <span className="font-semibold">Edad:</span> {profile.age} años
            </p>
            <p>
              <span className="font-semibold">País:</span> {profile.country}
            </p>
          </div>
        </div>
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
