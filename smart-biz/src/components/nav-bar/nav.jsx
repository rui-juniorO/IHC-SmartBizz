import React from 'react';
import { Component } from 'react';
import './nav.css';

import { Navbar, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


class SideNav extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  onSelect(e) {
    console.log('onSelect');
  }

  toggleNav() {
    console.log('toggle..');
  }

  render() {
    return (
      <Navbar className='home'>
        <Card className='card'>
          <Card.Img
            src={require('./../../pages/assets/signature.png')}
            variant='top'
            className='sig'
          />

          <Card.Body>
            <Card.Text>
              <div className='space'></div>
              <ListGroup variant='flush'>
                <ListGroupItem className='list'>
                  <span className='link' onClick={''}>
                    Direction
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={''}>
                    Procedures
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={''}>
                    Accounting
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={''}>
                    Human Resources
                  </span>
                </ListGroupItem>
                <ListGroupItem className='list'>
                  <span className='link' onClick={''}>
                    Help
                  </span>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </Navbar>
    );
  }
  componentDidMount() {}
}

export default SideNav;
