import React, { Component } from "react";
import products from "../mock/Products";

export default class Products extends Component {
  state = {
    message: "hi there is a product",
  };
  render() {
    return (
      <div style={{ padding: " 20px 50px" }}>
        {products.map((product, index) => {
          return (
            <ol key={index}>
              <>{index} :</>
              <li>name : {product.name}</li>
              <li>category : {product.category}</li>
              <li>price : {product.price}</li>
              <li>stocked : {product.stocked ? "Yes" : "No"}</li>
              <br />
            </ol>
          );
        })}
        <button onClick={() => this.props.func(this.state.message)}>
          click me
        </button>
      </div>
    );
  }
}
