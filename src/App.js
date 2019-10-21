import React, { Component } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
    this.grabInventory = this.grabInventory.bind(this);
  }

  componentDidMount() {
    this.grabInventory();
  }

  grabInventory() {
    axios
      .get("/api/inventory")
      .then(response => {
        this.setState({ inventory: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard grabInventory={this.grabInventory} inventory={this.state.inventory}/>
        <Form className="form" grabInventory={this.grabInventory}/>
      </div>
    );
  }
}

export default App;
