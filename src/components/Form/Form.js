import React, { Component } from "react";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      product: "",
      price: 0
    };
    this.postProduct = this.postProduct.bind(this);
    this.cancelProduct = this.cancelProduct.bind(this);
  }

  componentDidMount() {
    this.postProduct();
  }

  postProduct() {
    const newProduct = {
      imageURL: this.state.imageURL,
      product: this.state.product,
      price: this.state.price
    };
    axios.post("/api/product", newProduct).then( () => {
      this.setState({
        imageURL: "",
        product: "",
        price: 0
      });
      this.props.grabInventory();
    });
  }

  cancelProduct() {
    this.setState({
      imageURL: "",
      product: "",
      price: 0
    });
  }

  render() {
    return (
      <div className="forms">
        <div className="typing-box">
          <input
            type="text"
            placeholder="Image URL"
            onChange={e => this.setState({ imageURL: e.target.value })}
            value={this.state.imageURL}
          ></input>
          <input
            type="text"
            placeholder="Product Name"
            onChange={e => this.setState({ product: e.target.value })}
            value={this.state.product}
          ></input>
          <input
            type="text"
            placeholder="Price"
            onChange={e => this.setState({ price: e.target.value })}
            value={this.state.price}
          ></input>
        </div>
        <div className="buttons">
          <button onClick={() => this.cancelProduct()}>Cancel</button>
          <button onClick={() => this.postProduct( )}>Add To Inventory</button>
        </div>
      </div>
    );
  }
}
