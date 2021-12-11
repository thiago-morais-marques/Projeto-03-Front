import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';
import UserSignUp from '../Pages/SignUp/SignUp';

const App = () => {
  dotenv.config();
  // const [posts, setPosts] = useState([])
  // useEffect( async () => {
  // const postResponse = await getAllPostsByTags()
  // setPosts(postResponse)
  // },[])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<UserSignUp />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/financas" element={<Finances />} />
      <Route path="/tecnologia" element={<Tecnology />} />
      <Route path="/sustentabilidade" element={<Sustainability />} />
      <Route path="/veiculos" element={<Vehicles />} />
      <Route path="/posts" element={<Post />} />
    </Routes>
  );
};

export default App;
