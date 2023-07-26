import React, { Component } from "react";
import { products } from "../mock/Products";
import Container from "../components/Container";

export default class Products extends Component {
  render() {
    return (
      <div style={{ padding: " 20px 50px" }}>
        <Container>
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
        </Container>
      </div>
    );
  }
}
