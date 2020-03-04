import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleNavbar () {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <div className="container">
          <NavbarBrand />
        </div>
      </nav>
    )
  }
}

export default Navbar
