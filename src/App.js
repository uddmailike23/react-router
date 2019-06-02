import React from 'react'
import { Route, Link, Switch, NavLink } from 'react-router-dom'
import './App.css'

const Index = () => <p>Home</p>

const About = () => <p>About</p>

const Users = () => <p>Users</p>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </Switch>
        <Link to="/">Home</Link>
        <NavLink to="/about/" activeClassName="is-active">
          About
        </NavLink>
        <Link to="/users/">Users</Link>
      </header>
    </div>
  )
}

export default App
