import React from 'react';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import LoginAs from "./LoginAs"
import Register from "./Register"
import Login from "./Login"
import UploadDetails from "./UploadDetails"


function App() {
  return (
    <Router>
      <div >
      <Switch>
       <Route path="/Userlogin">
          <Header home={false} />
          <UploadDetails />
        </Route>
      <Route path="/newUser">
          <Header home={false} />
          <Register />
        </Route>
      <Route path="/login">
          <Header home={false} />
          <Login />
        </Route>
      <Route path="/loginAs">
          <Header home={false} />
          <LoginAs isNewUser={true}  />
        </Route>
         <Route path="/register">
          <Header home={false} />
          <LoginAs isNewUser={false} />
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
