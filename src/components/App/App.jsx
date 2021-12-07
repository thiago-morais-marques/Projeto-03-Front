import * as React from 'react';
import Home from '../Pages/Home/Home';
import SignUp from '../Pages/Home/homeComponents/SignUp';
// import {BrowserRouter} from 'react-router-dom';
// import {Route} from 'react-router-dom';

const App = () => {
  return (

    <div>
      <Home />
      <SignUp path="/" component={SignUp} />
    </div>
  );
};

export default App;
