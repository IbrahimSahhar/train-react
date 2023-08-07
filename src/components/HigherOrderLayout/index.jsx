import React from "react";

function HigherOrderLayout(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    state = {
      data: [1, 2, 3],
    };

    render() {
      console.log("from hoc", this.state.data);
      return <WrappedComponent data={this.state.data} />;
    }
  };
}

export default HigherOrderLayout;
