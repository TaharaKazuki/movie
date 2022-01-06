import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
      </Router>
    </div>
  )
}

export default App
