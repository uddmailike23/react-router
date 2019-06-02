import React, { Fragment } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import queryString from 'query-string'
import './App.css'

const Index = () => <p>Home</p>

const About = () => <p>About</p>

const Users = props => {
  const user = props.match.params.name
  const _queryString = queryString.parse(props.location.search)
  return (
    <Fragment>
      <p>Users: {user}</p>
      <p>
        Query string: age = {_queryString.age}, sex = {_queryString.sex}
      </p>
    </Fragment>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/:name" component={Users} />
        </Switch>
        <NavLink exact to="/" activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="is-active">
          About
        </NavLink>
        <NavLink to="/users/" activeClassName="is-active">
          Users
        </NavLink>
      </header>
    </div>
  )
}

export default App
