import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { StoreProvider } from './context/store';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCreated from './components/Pages/Template/PostCreate/PostCreate';
import PostComment from './components/Pages/Template/Comments/PostComment';
// import Post from './components/Pages/Template/Post';
import AlignItemsList from './components/Pages/Template/Comments/PostMui';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <StoreProvider> */}
      <App />
      {/* <PostCreated /> */}
      {/* <Post /> */}
      {/* <PostComment /> */}
      {/* <AlignItemsList /> */}
      {/* </StoreProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root'),
);
