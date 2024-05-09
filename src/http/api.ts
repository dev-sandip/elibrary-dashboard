import useTokenStore from "@/store";
import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};
export const signUp = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/users/register", data);
};

export const getBooks = async () => {
  return api.get("/api/books");
};
export const getBook = async (id: string) => {
  return api.get(`/api/books/${id}`);
};
export const createBook = async (data: FormData) =>
  api.post("/api/books", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateBook = async (data: FormData, id: string) => {
  api.patch(`/api/books/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBook = async (id: string) => {
  return api.delete(`/api/books/${id}`);
};
