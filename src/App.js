import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import ListPage from './ListPage';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route path='/list' component={ListPage}></Route>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
