import React, { Component } from 'react'

import Navbar from './components/Navbar'

import Home from './views/Home'
import Post from './views/Post'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='app'>
        <Navbar />
        <div className='container' id='container-app'>
          <Post />
          <Home />
        </div>
      </div>
    )
  }
}

export default App
