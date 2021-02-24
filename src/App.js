import React from 'react';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"


function App() {
  return (
    <Router>
      <div >
      <Switch>
      <Route path="/newUser">
          <Header home={false} />
          <Register />
        </Route>
      <Route path="/login">
          <Header home={false} />
          <Login isNewUser={true} />
        </Route>
         <Route path="/register">
          <Header home={false} />
          <Login isNewUser={false} />
        </Route>
      <Route path="/">
          <Header home={true} />
          <Home />
        </Route>
      
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
