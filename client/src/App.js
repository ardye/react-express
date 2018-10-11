import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NavBar from './components/Nav/NavBar';
import Customers from './components/customers/Customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <Customers />
        </Container>
      </div>
    );
  }
}

export default App;
