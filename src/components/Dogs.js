import React from "react";
import Axios from "axios";
import { fetchDogs } from "../controller";

class Dogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogList: [],
    };
  }

  async componentDidMount() {
    this.setState({ dogList: await fetchDogs("breeds/list/all") });
  }

  render() {
    console.log("Rendering Dogs");
    return (
      <div>
        <h1>Hello, Dogs!</h1>
        <ul className="dog-list">
          {this.state.dogList.map((dog) => (
            <li>{dog}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Dogs;
