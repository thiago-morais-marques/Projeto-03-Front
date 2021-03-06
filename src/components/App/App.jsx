import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';
import UserSignUp from '../Pages/SignUp/SignUp';
import Profile from '../Pages/Profile/Profile';
import Post from '../Templates/Posts/Post';
import PostCreate from '../Templates/Posts/PostCreate/PostCreate';

const App = () => {
  const verifyLoggedUser = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  const [isUserLogged, setIsUserLogged] = useState(verifyLoggedUser());

  const loginUser = () => {
    setIsUserLogged(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin loginUser={loginUser} />} />
      <Route path="/register" element={<UserSignUp />} />
      <Route path="/profile/:id" element={<ProtectedRoute isLogged={isUserLogged} Page={Profile} />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/createpost" element={<ProtectedRoute isLogged={isUserLogged} Page={PostCreate} />} />
    </Routes>
  );
};

export default App;
