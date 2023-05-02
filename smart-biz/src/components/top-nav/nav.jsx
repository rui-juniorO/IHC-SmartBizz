import React from 'react';
import { Component } from 'react';
import './top-nav.css';

import { Navbar, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class TopNav extends Component {
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
      <Navbar className='homeTop'>
        
      </Navbar>
    );
  }
  componentDidMount() {}
}

export default TopNav;
