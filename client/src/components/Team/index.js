import React, { Component } from "react";
import { Grid, Card, Image, Segment, Container } from "semantic-ui-react";

class Team extends Component {
  render() {
    return (
      <Container>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card>
                  <Image src="" />
                  <Card.Header>Team Member Name</Card.Header>
                  <Card.Meta>Title</Card.Meta>
                  <Card.Description>Enter Bio Here</Card.Description>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src="" />
                  <Card.Header>Team Member Name</Card.Header>
                  <Card.Meta>Title</Card.Meta>
                  <Card.Description>Enter Bio Here</Card.Description>
                </Card>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card>
                  <Image src="" />
                  <Card.Header>Team Member Name</Card.Header>
                  <Card.Meta>Title</Card.Meta>
                  <Card.Description>Enter Bio Here</Card.Description>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src="" />
                  <Card.Header>Team Member Name</Card.Header>
                  <Card.Meta>Title</Card.Meta>
                  <Card.Description>Enter Bio Here</Card.Description>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Team;
