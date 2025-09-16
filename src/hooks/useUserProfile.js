import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useUserProfile() {
  const { item: profiles, saveItem: setProfiles } = useLocalStorage(
    "PROFILE_DATA_V1",
    initialProfiles
  );

  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  const deleteProfile = (username) => {
    setProfiles(profiles.filter((profile) => profile.username !== username));
  };

  const updateProfile = (username, profile) => {
    deleteProfile(username);
    addProfile(profile);
  };

  const getProfile = (username) => {
    return profiles.find((profile) => profile.username === username);
  };

  return {
    profiles,
    addProfile,
    getProfile,
    updateProfile,
    deleteProfile,
  };
}

const initialProfiles = [
  {
    username: "ricardo",
    first_name: "Ricardo Daniel",
    last_name: "Quiroga",
    country: "Argentina",
    age: 38,
    role: "moderator",
  },
  {
    username: "marisol",
    first_name: "Marisol del Valle",
    last_name: "Gimenez",
    age: 32,
    country: "Argentina",
    role: "user",
  },
  {
    username: "camila",
    first_name: "Camila",
    last_name: "Monico",
    age: 36,
    country: "Mexico",
    role: "user",
  },
  {
    username: "oriana",
    first_name: "Oriana Martina",
    last_name: "Gimenez Lopez",
    age: 8,
    country: "Argentina",
    role: "user",
  },
  {
    username: "admin",
    first_name: "Admin",
    last_name: "User",
    age: 23,
    country: "USA",
    role: "admin",
  },
  {
    username: "juandc",
    first_name: "Juan David",
    last_name: "Castro",
    age: 28,
    country: "Colombia",
    role: "moderator",
  },
];

export { useUserProfile };
