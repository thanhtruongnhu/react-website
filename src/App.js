import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> {/*Everytime we hit the slash (or enter the website) it will open the Home page*/ }
      </Switch>
    </Router>      
    </>
  );
}

export default App;
