import React from 'react';
import { Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';
import Home from '../Pages/Home/Home';
import UserLogin from '../Pages/Login/Login';
import UserSignUp from '../Pages/SignUp/SignUp';
// import PostCreated from '../Pages/Template/PostCreate/PostCreate';
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
      <Route path="/register" element={<UserSignUp />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/posts" element={<Post />} />
      {/* <Route path="/financas" element={<Finances />} />
      <Route path="/tecnologia" element={<Tecnology />} />
      <Route path="/sustentabilidade" element={<Sustainability />} />
      <Route path="/veiculos" element={<Vehicles />} />
            {/* <Route path="/createpost" element={<PostCreated />} /> */}
    </Routes>
  );
};

export default App;
