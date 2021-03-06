import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";
import Footer from './components/layout/Footer';


// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import TaskPage from "./components/tasks/TaskPage";
import ParentsPage from './components/parents/ParentsPage';
import ExchangePage from './components/exchange/ExchangePage';
 

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />
             

                <div className="container mt-5">
                    <Switch>
                        <Route path="/tasks">
                            <TaskPage/>
                        </Route>


                        <Route path="/parents">
                            <ParentsPage/>
                        </Route>
                        
                        <Route path="/exchange">
                            <ExchangePage/>
                        </Route>

                        <Route path="/">
                          <HomePage/>
                        </Route>
                    </Switch>
                    
                </div>

                    
                
                <div>
                <Footer/>
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
