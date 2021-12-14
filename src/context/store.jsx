import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { getAllPosts } from '../service/api';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const store = {
    posts: [posts, setPosts],
  };
  useEffect(async () => {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse);
  }, []);

  return posts.length > 0 && (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.defaultProps = {
  children: '',
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};
