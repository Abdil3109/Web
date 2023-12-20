import React, { Component } from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import MovieCard from './MovieCard'
import FantasyCard from './FantasyCard'
import Movies_Detective_card from './Movies_Detective_card'
import Movies_Adventure_Card from './Movies_Adventure_Card'
import Movies_Family_Card from './Movies_Family_Card'

export default class MovieTabs extends Component {
  render() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
         
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <MovieCard/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <FantasyCard/>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <Movies_Detective_card/>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              <Movies_Adventure_Card/>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
              <Movies_Family_Card/>
              </Tab.Pane>
            </Tab.Content>
          </Col>

          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Musical</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Fantasy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Detectives</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Adventures</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Family</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    )
  }
}
