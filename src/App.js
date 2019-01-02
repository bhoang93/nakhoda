import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";

import Nav from "./Components/Nav";
import Userbar from "./Components/Userbar";
import Text from "./Components/Text";
import Dropdown from "./Components/Dropdown";

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  box-shadow: inset 0 0 4rem rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Userbar />

        <Body>
          <Text />
          <Dropdown />
        </Body>
      </div>
    );
  }
}

export default App;
