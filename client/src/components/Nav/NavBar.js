import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Express</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
