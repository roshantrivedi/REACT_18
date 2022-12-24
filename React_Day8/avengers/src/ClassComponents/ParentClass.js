import { Component } from "react";
import ChildClass from "./ChildClass";

class ParentClass extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "BLUE" };
    console.log("inside parent class constructor()");
  }

  componentDidMount() {
    console.log("Parent componentDidMount()  ");
    this.setState({ color: "REDddddddddddd" });
    console.log("state changed of P");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate() ");
  }

  render() {
    return (
      <>
        <h2>Exploring Class Components (II)</h2>
        {console.log("inside parent class render()")}
        <ChildClass />
      </>
    );
  }
}

export default ParentClass;
