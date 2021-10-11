import Login from './pages/Login.js';
import Home from './pages/Home.js';
import UserCad from './pages/UserCad.js';
import ServiceOs from './pages/ServiceOS.js';

import { BrowserRouter as Router,  Route} from 'react-router-dom';
import React from 'react';
import {AuthProvider} from './components/Auth.js'


function App() {

  return (
  <AuthProvider>
   <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/UserCad" component={UserCad} />    
      <Route exact path="/ServiceOs" component={ServiceOs} />    
    </Router>
  </AuthProvider>
  );


}

export default App;
