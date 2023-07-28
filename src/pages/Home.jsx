import React, { Component, createRef } from "react";

import Container from "../components/Container";
// import axios from "axios";

// import { API_URL } from "../config/api.js";

export default class Home extends Component {
  state = {
    // name: "",
    // email: "",
    // id: "",
    // isAdmin: false,
    refs: [],
  };

  arr = [...Array(10)];
  componentDidMount() {
    this.setState({
      refs: this.arr.map((item) => React.createRef()),
    });
  }
  handelChange = (id) => {
    this.state.refs[id].current?.focus();
  };

  // componentDidMount() {
  //   // const token = localStorage.getItem("token");
  //   axios
  //     .get(`${API_URL}/profile`, {
  //       headers: {
  //         // Authorization: `Bearer ${token}`,
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmMzYTlkMWQ1MjI3MDgxNzBlZjY4YiIsImlhdCI6MTY5MDUzMjkwMCwiZXhwIjoxNjkzMTI0OTAwfQ.dz8RPwxPEfLK7I_khuqWBzwoiV73XTU7pESpIXhMZsI",
  //       },
  //     })
  //     .then((response) => {
  //       this.setState({
  //         name: response.data.name,
  //         email: response.data.email,
  //         id: response.data._id,
  //         isAdmin: response.data.isAdmin,
  //       });
  //     });
  // }

  render() {
    return (
      <div>
        <Container>
          {/* <>
            information :
            <br />
            <ul style={{ display: "block", lineHeight: "1.525rem" }}>
              <li>name : {this.state.name}</li>
              <li> email : {this.state.email}</li>
              <li>id : {this.state.id}</li>
              <li>
                {this.state.isAdmin ? "you are admin" : "you are not admin"}
              </li>
            </ul>
          </> */}
          <div style={{ display: "flex", marginTop: "3.125rem" }}>
            {
              this.arr.map((item, index) => {
                return (
                  <input
                    type="number"
                    style={{ width: "2.55rem" }}
                    ref={this.state.refs[index - 1]}
                    onChange={() => this.handelChange(index)}
                  />
                );
              })
              /* <input
              type="number"
              style={{ width: "2.55rem" }}
              ref={this.inputRef1}
              onChange={() => this.handelChange(2)}
            />
            <input
              type="number"
              style={{ width: "2.55rem" }}
              ref={this.inputRef2}
              onChange={(e) => this.handelChange(3)}
            />
            <input
              type="number"
              style={{ width: "2.55rem" }}
              ref={this.inputRef3}
              onChange={(e) => this.handelChange(4)}
            />
            <input
              type="number"
              style={{ width: "2.55rem" }}
              ref={this.inputRef4}
              onChange={(e) => this.handelChange(5)}
            /> */
            }
          </div>
        </Container>
      </div>
    );
  }
}
