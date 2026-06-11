import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  withCredentials: true,
});
