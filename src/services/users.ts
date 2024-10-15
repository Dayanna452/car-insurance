//Libraries 
import { useQuery } from "react-query";

import { API_URL } from "../data/constants/keys";

export interface UserType {
  typeDocument: string
  document?: number
  phoneNumber?: string
  plate?: string
  privacy: boolean
}

const fetchUsers = async () => {
  const res = await fetch(API_URL + "/users/1");
  const data = await res.json();
  return data;
};

export const useUser = () => {
  return useQuery<UserType, Error>("user", fetchUsers);
};
