import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    email, password,
  });
  console.log('Login feito');
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api.post('/auth/register', {
    name, email, password,
  });
  console.log('Cadastro feito');
  return response.data;
};

export const getAllPosts = async () => {
  const response = await api.get('/posts');
  console.log('Posts retornados');
  return response.data;
};

export const getOneUser = async (token) => {
  const response = await api.get('/account', { headers: { Authorization: `Bearer ${token}` } });
  console.log('Usuário retornado');
  return response.data;
};
