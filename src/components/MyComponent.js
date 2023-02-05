import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "ThuNT39",
    age: 27,
  };
  render() {
    return (
      <div>
        Hello mọi người, chào mừng mọi người đến với blog của mình Mình tên là
        {this.state.name} và mình {this.state.age} tuổi.
      </div>
    );
  }
}
export default MyComponent;
