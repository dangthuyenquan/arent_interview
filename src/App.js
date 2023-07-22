import React from "react";
import Main from "./layout/Main";
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }
  render() {
    return (<Main />);
  }
}

export default App;
