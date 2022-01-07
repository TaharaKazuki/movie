import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// common components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// page components
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
// import MovieDetail from './components/MovieDetail/MovieDetail'

import './App.scss'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/movie/:imdbID" component={MovieDetail} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
