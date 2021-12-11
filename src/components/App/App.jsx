import * as React from 'react';
import dotenv from 'dotenv';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';
import UserSignUp from '../Pages/SignUp/SignUp';

const App = () => {
  dotenv.config();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserSignUp />} />
    </Routes>
  );
};

export default App;
