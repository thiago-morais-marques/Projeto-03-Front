import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Signup/SignUp';
import UserLogin from '../Pages/Home/Login/Login'
import Finances from '../Pages/Finances/Finances';
import Tecnology from '../Pages/Tecnology/Tecnology';
import Sustainability from '../Pages/Sustainability/Sustainability';
import Vehicles from '../Pages/Vehicles/Vehicles';
import Post from '../Pages/Template/Post';


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
      <Route path="/register" element={<SignUp />} />
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
