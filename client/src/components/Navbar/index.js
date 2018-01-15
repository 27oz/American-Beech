import React, { Component } from "react";
import { Menu, Container, Icon } from "semantic-ui-react";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Container>
          <Menu pointing secondary inverted>
            <Menu.Item as="a" header onClick={this.handleItemClick}>
              {"<27oz />"}
            </Menu.Item>
            <Menu.Item
              as="a"
              name="ourHistory"
              active={activeItem === "ourHistory"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as="a"
              name="contactUs"
              active={activeItem === "contactUs"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <a href="https://google.com">
                  <Icon link name="twitter" size="big" />
                </a>
                <a href="https://google.com">
                  <Icon link name="instagram" size="big" />
                </a>
                <a href="https://google.com">
                  <Icon link name="facebook square" size="big" />
                </a>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default Navbar;
