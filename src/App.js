import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

const Index = () => <h2>Home</h2>

const About = () => <h2>About</h2>

const Users = () => <h2>Users</h2>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <Route path="/" component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />

          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/users/">Users</Link>
        </Router>
      </header>
    </div>
  )
}

export default App
