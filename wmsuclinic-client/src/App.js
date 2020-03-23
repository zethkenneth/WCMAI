import React,{Fragment , useState} from 'react';
import  {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import './App.css';


//components

import Dashboard from "./components/Dashborad";
import Login from "./LoginModal/LoginModal"
import Homepage from "./components/Homepage";



function App() {
    const [isAuthenticated, setIAuthenticated] = useState(false);

    const setAuth = boolean =>{
        setIAuthenticated (boolean);
    }




  return (
      <Fragment>
        <Router>
          <div className="container">
            <Switch>
            <Route exact path ="/" render={props => !isAuthenticated ? <Homepage {...props} /> : <Redirect to="/homepage" />  } />
        <Route exact path ="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" />  } />
          <Route exact path ="/Dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
            </Switch>
          </div>
        </Router>

      </Fragment>
  );
}

export default App;
