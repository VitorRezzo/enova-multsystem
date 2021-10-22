import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import UserCad from './pages/UserCad/UserCad.js';
import ServiceOs from './pages/ServiceOS/ServiceOS.js';

import { BrowserRouter as Router,  Route} from 'react-router-dom';
import React from 'react';
import {GlobalUseProvider} from './components/GlobalUse.js'


function App() {

  return (
  <GlobalUseProvider>
   <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/UserCad" component={UserCad} />    
      <Route exact path="/ServiceOs" component={ServiceOs} />    
    </Router>
  </GlobalUseProvider>
  );


}

export default App;
