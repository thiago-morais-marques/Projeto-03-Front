import React, { useContext } from 'react';
import dotenv from 'dotenv';
import { Routes, Route } from 'react-router-dom';
import { StoreContext } from '../../context/store';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';
import UserSignUp from '../Pages/SignUp/SignUp';
// import SearchResults from '../Pages/SearchResults/SearchResults';

const App = () => {
  dotenv.config();
  return (
    <Routes>
      <Route path="/" element={<Home posts="posts" />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserSignUp />} />
      {/* <Route path="/results" element={<SearchResults />} /> */}
    </Routes>
  );
};

export default App;
