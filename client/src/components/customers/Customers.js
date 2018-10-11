import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Customers</h1>
          <ListGroup>
            {this.state.customers.map(customer => (
              <ListGroupItem key={customer.id}>
                {customer.firstName + ' ' + customer.lastName}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Customers;
