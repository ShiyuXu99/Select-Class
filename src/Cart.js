import React from 'react';
import './App.css';
import Course from './CourseComponents/Course'


class showCart extends React.Component {
  getAllCart() {
    let carts = [];
    for (const cart of Object.entries(this.props.data)) {
      carts.push(
        <Cart key={cart[0]} name={cart[0]} data={cart[1]} />
      )
    }
    return carts;
  }
  render() {
    return (
      <div>
        {this.getAllCart()}
      </div>
    )
  }
}


class Cart extends React.Component {

  render() {
    return (
      <div>
        <Course data={this.props.data} hideCartButton={true} />
      </div>
    )
  }
}

export default showCart;
