import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreated from './components/Pages/Template/PostCreate/PostCreate';
import PostComment from './components/Pages/Template/Comments/PostComment';
// import Post from './components/Pages/Template/Post';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <PostCreated /> */}
      {/* <Post /> */}
      {/* <PostComment /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);
