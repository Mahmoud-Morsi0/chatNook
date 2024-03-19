import axios from "./request";

export const login = (data) => {
  return axios.post("/user/login", data);
};
export const registration = (data) => {
  return axios.post("/user/signup", data);
};
export const logout = (data) => {
  return axios.post("/user/logout", data);
};
export const getAllUsers = () => {
  return axios.get("/contacts");
};
export const getAllMessages = (id) => {
  return axios.get(`/messages/:${id}`);
};
export const sendMessage = (id) => {
  return axios.post(`/messages/send/:${id}`);
};
export const changeProfilePic = (id) => {
  return axios.patch("/user/changepic", id);
};
export const getUserChat = () => {
  return axios.get(`/contacts/chats/`);
};

