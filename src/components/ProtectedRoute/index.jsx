import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? (
          <div>
            <Header logOut={this.props.logOut} />
            <Outlet />
            <Footer />
          </div>
        ) : (
          <Navigate to={"/form"} />
        )}
      </div>
    );
  }
}
