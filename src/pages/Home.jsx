import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header myPage="home" />

        <Card
          title="Card 1"
          src={card1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        >
          <h3>this is children</h3>
        </Card>
        <Card
          title="Card 2"
          src={card2}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        >
          <h3>this is children</h3>
        </Card>
        <Card
          title="Card 3"
          src={card3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        >
          <h3>this is children</h3>
        </Card>
      </div>
    );
  }
}
