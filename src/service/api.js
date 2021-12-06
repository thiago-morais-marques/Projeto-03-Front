import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = async (email, password, role, active) => {
  const response = await api.post('/auth/login', {
    email, password, role, active,
  });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post('/auth/login', {
    name, email, password,
  });
  return response.data;
};

export const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};
