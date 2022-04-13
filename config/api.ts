import axios from "axios";

export const expAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const API = axios.create({
  baseURL: "https://fast-falcon-79.loca.lt/api/v1/",
});
