import { Component } from "react";
import ParentClass from "./ParentClass";

class GrandParentClass extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "RED" };
    console.log("inside grand-parent class constructor()");
  }

  async componentDidMount() {
    console.log("Grand-Parent componentDidMount()  ");
    this.setState ({ color: "REDddddddddddd" });
    console.log("state changed of GP");
  }

  componentDidUpdate() {
    console.log("Grand-Parent componentDidUpdate() ");
  }

  render() {
    return (
      <>
        <h2>Exploring Class Components (I)</h2>
        {console.log("inside grand-parent class render()")}
        <ParentClass />
      </>
    );
  }
}

export default GrandParentClass;
