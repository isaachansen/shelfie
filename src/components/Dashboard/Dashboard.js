import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

export default class Dashboard extends Component {
  deleteProduct(id) {
    axios.delete(`/api/product/${id}`).then(() => {});
    this.props.grabInventory();
  }

  render() {
    const mappedInventory = this.props.inventory.map(product => {
      return (
          <div key={this.props.inventory.indexOf(product)}>
              <Product product={product}/>
              <button onClick={() => this.deleteProduct(product.id)}>Delete</button>
              <button>Edit</button>
          </div>
      );
  });
    return <div>{mappedInventory}</div>;
  }
}
