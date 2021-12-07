import * as React from 'react';
import dotenv from 'dotenv';
import Home from '../Pages/Home/Home';

const App = () => {
  dotenv.config();
  return (
    <Home />
  );
};

export default App;
