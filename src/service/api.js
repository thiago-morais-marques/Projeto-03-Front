import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
});

const verifyUnauthorizedError = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/';
  }
  return Promise.reject(error);
};

api.interceptors.response.use(
  (response) => response,
  verifyUnauthorizedError,
);

const setHeaders = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

export const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    email, password,
  });
  return response.data;
};

export const register = async (formData) => {
  const response = await api.post('/auth/register', {
    ...formData,
  });
  return response.data;
};

export const getOneUser = async (token) => {
  const response = await api.get('/account', setHeaders(token));
  return response.data;
};

export const editUser = async (body, token) => {
  const response = await api.put('/account/edit', body, setHeaders(token));
  return response.data;
};

export const deleteUser = async (token) => {
  const response = await api.delete('/account/delete', setHeaders(token));
  return response.data;
};

export const deleteEverything = async (token) => {
  const response = await api.delete('/account/delete-everything', setHeaders(token));
  return response.data;
};

export const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const getOnePost = async (postId) => {
  const response = await api.get(`/posts/${postId}`);
  return response.data;
};

export const searchPosts = async (filter) => {
  const response = await api.get(`/posts/search?filter=${filter}`);
  return response.data;
};

export const createOnePost = async (body, token) => {
  const response = await api.post('/posts', body, setHeaders(token));
  return response.data;
};

export const editPost = async (postId, body, token) => {
  const response = await api.put(`/posts/${postId}`, body, setHeaders(token));
  return response.data;
};

export const deletePost = async (postId, token) => {
  const response = await api.delete(`/posts/${postId}`, setHeaders(token));
  return response.data;
};

export const getAllPostComments = async (postId) => {
  const response = await api.get(`/comments/${postId}`);
  return response.data;
};

export const createOneComment = async (postId, body, token) => {
  const response = await api.post(`/comments/${postId}`, body, setHeaders(token));
  return response.data;
};

export const editComment = async (commentId, body, token) => {
  const response = await api.put(`/posts/${commentId}`, body, setHeaders(token));
  return response.data;
};

export const deleteComment = async (commentId, token) => {
  const response = await api.delete(`/comments/${commentId}`, setHeaders(token));
  return response.data;
};
