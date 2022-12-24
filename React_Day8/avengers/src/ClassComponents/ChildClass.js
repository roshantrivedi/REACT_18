import { Component } from "react";

class ChildClass extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "GREEN" };
    console.log("inside child-parent class constructor()");
  }

  componentDidMount() {
    console.log("Child componentDidMount()  ");
    this.setState ({ color: "REDddddddddddd" });
    console.log("state changed of C");
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate() ");
  }

  render() {
    return (
      <>
        <h2>Exploring Class Components (III)</h2>
        {console.log("inside child class render()")}
      </>
    );
  }
}

export default ChildClass;
