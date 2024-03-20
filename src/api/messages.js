import axios from "./request";

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
export const getAllGroups = () => {
  return axios.get(`/contacts/chats`);
};
export const createGroup = (data) => {
  return axios.post("/contacts/chats/create", data);
};
