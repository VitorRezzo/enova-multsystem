import Login from './pages/Login.js';
import Home from './pages/Home.js';


import { BrowserRouter as Router,  Route} from 'react-router-dom';
import React from 'react';
import {AuthProvider} from './components/Auth.js'


function App() {

  return (
  <AuthProvider>
   <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
    </Router>
  </AuthProvider>
  );


}

export default App;
