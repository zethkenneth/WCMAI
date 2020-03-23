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
import Login from "./LoginModal/LoginModal";
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
<<<<<<< HEAD
            <Route exact path ="/" render={props => !isAuthenticated ? <Homepage {...props}  /> : <Redirect to="/homepage" />  } />
         <Route exact path ="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" />  } />
          <Route exact path ="/Dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
=======
            <Route exact path ="/homepage" render={props => !isAuthenticated ? <Homepage {...props} setAuth={setAuth} /> : <Redirect to="/homepage" />  } />
            <Route exact path ="/login" render={props => !isAuthenticated ? <Login {...props} setAuth={setAuth} /> : <Redirect to="/dashboard" />  } />
            <Route exact path ="/dashboard" render={props => isAuthenticated ? <Dashboard {...props} setAuth={setAuth} /> : <Redirect to="/login" />} />
>>>>>>> a052d91cedaff5da37d4448b2733580918be4b95
            </Switch>
          </div>
        </Router>

      </Fragment>
  );
}

export default App;
