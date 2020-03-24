import React,{Fragment , useState} from 'react';
import  {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect 
} from "react-router-dom";
import './App.css';


//components

import Dashboard from "./components/Dashboard";
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
            <Route exact path ="/" render={props => !isAuthenticated ? <Homepage setAuth={setAuth} {...props} /> : <Redirect to="/dashboard" />  } />
        <Route exact path ="/homepage" render={props => !isAuthenticated ? <Homepage {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" />  } />
        <Route exact path ="/login" render={props => isAuthenticated ? <login {...props} setAuth={setAuth} /> : <Redirect to="/homepage" />} />
          <Route exact path ="/Dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/homepage" />} />
            </Switch>
          </div>
        </Router>

      </Fragment>
  );
}

export default App;
