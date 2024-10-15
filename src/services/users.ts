//Libraries 
import { useQuery } from "react-query";

import { API_URL } from "../data/constants/keys";

export interface UserType {
  typeDocument: string
  document: string
  phoneNumber: string
  privacy: boolean
  conditions: boolean
}

const fetchUsers = async () => {
  const res = await fetch(API_URL + "/users");
  const data = await res.json();
  return data;
};

export const useUsers = () => {
  return useQuery<UserType[], Error>("users", fetchUsers);
};
