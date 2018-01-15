import React, { Component } from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

class Hero extends Component {
  render() {
    return (
      <Segment
        id="hero-to-attach"
        name="hero"
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          padding: "0em 0em"
        }}
        vertical
      >
        {this.props.children}
        <Header
          as="h1"
          content={"We are <27oz />"}
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em"
          }}
        />
        <Header
          as="h2"
          content="Fully Managed Cryptocurrency Mining Solutions."
          inverted
          style={{ fontSize: "1.7em", fontWeight: "normal" }}
        />
      </Segment>
    );
  }
}

export default Hero;
