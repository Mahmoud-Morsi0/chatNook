import axios from "./request";

export const login = (data) => {
  return axios.post("/login", data);
};
export const registration = (data) => {
    return axios.post("/registration", data);
  };