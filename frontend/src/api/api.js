import axios from "axios";

const API = axios.create({
  baseURL: "https://swachhsetu-6mkm.onrender.com/api",
});

// Automatically attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;
