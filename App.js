import React, {Component} from "react";
import LandingPage from "./start-hub/LandingPage";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
}
  render(){
    return(
      <LandingPage></LandingPage>
    );
  }
}
export default App;