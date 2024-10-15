import { create } from "zustand";

import { UserType } from "../../services/users";
import { UserInit } from "../constants/data";
import { UserData } from "../../presentation/types/users";

interface UserPlanType {
  userData: UserData;
  user: UserType | undefined;
  setUserData: (userData: UserData) => void;
  setUser: (user: UserType | undefined) => void;
}

// Función para cargar el usuario desde localStorage
const getUserFromLocalStorage = (): UserType | undefined => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
};

// Función para guardar el usuario en localStorage
const setUserToLocalStorage = (user: UserType | undefined) => {
  if (user) return localStorage.setItem("user", JSON.stringify(user));
  return localStorage.removeItem("user");
};

const setUserDataToLocalStorage = (userData: UserData[]) => {
  if (userData)
    return localStorage.setItem("userData", JSON.stringify(userData));
  return localStorage.removeItem("userData");
};

export const useUsersData = create<UserPlanType>((set) => ({
  userData: UserInit,
  user: getUserFromLocalStorage(),
  setUserData: (userData: UserData) => {
    set(() => ({ userData }));
    setUserDataToLocalStorage([userData]);
  },
  setUser: (user: UserType | undefined) => {
    set(() => ({ user }));
    setUserToLocalStorage(user);
  },
}));
