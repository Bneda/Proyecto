import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Schedule from './Schedule';


const App= ()=>{
  return (
    <div className="ui container">    
      <BrowserRouter>
      <Switch>
        <div className="content">
        <nav>
          <ul className="ui list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Schedule">Horario</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/">
          <Header/>
        </Route>
          <Route path="/Schedule">
            <Schedule />
          </Route> 
        </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;