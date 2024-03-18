import axios from "./request";

export const login = (data) => {
  return axios.post("/user/login", data);
};
export const registration = (data) => {
  return axios.post("/user/signup", data);
};
