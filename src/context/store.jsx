import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  // Validação de usuário logado
  const verifyLoggedUser = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  const [isUserLogged, setIsUserLogged] = useState(verifyLoggedUser());

  // Posts
  const [posts, setPosts] = useState([]);

  // Users
  const [userInfo, setUserInfo] = useState({});

  // Search Bar
  const [search, setSearch] = useState('');

  // Anexar Foto
  const [attach, setAttach] = useState('');

  // Loading
  const [loading, setLoading] = useState(false);

  // Imagem em base64
  const [decodedImage, setDecodedImage] = useState('');

  // Store
  const store = {
    posts: [posts, setPosts],
    isUserLogged: [isUserLogged, setIsUserLogged],
    userInfo: [userInfo, setUserInfo],
    search: [search, setSearch],
    attach: [attach, setAttach],
    loading: [loading, setLoading],
    decodedImage: [decodedImage, setDecodedImage],
  };

  return (
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
