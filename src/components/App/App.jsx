import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Signup/SignUp';
import UserLogin from '../Pages/Home/Login/Login'

const App = () => {
  dotenv.config();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
};

export default App;
