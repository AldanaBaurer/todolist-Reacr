import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Main } from './views/Main'
import { Countries } from './views/Countries'
import { Cities } from './views/Cities'
import { Companies } from './views/Companies'
import { Positions } from './views/Positions'
import { NotFound } from './views/NotFound'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/cities" exact component={Cities} />
          <Route path="/companies" exact component={Companies} />
          <Route path="/positions" exact component={Positions} />
          <Route component={NotFound} />
        </Switch>
      </div>     
    </div>
  )
}

export default App;
