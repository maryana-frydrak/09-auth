import axios from "axios";

export const nextServer = axios.create({
  baseURL: "https://09-auth-indol-one.vercel.app/",
  withCredentials: true,
});
