import * as React from 'react';
import dotenv from 'dotenv';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';

const App = () => {
  dotenv.config();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
    </Routes>
  );
};

export default App;
