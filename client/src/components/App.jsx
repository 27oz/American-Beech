import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Team from "./Team";
import Hero from "./Hero";

const Home = () => <h1>Home</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Hero>
            <Navbar />
          </Hero>

          <Team />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
