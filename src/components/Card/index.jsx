import React, { Component } from "react";
import "./style.css";
import Container from "../Container";

// export default class Card extends Component {
//   render({ title, src, description } = this.props) {
//     console.log(this.props.Children);

//     return (
//       <div className="card">
//         <h2>{title}</h2>
//         <img src={src} alt="cardImage" />
//         <p>{description}</p>
//         {this.props.Children}
//       </div>
//     );
//   }
// }

const Card = ({ title, src, description, children }) => {
  return (
    <Container>
      <div className="card">
        <h2>{title}</h2>
        <img src={src} alt="cardImage" />
        <p>{description}</p>
        {children}
      </div>
    </Container>
  );
};

export default Card;
