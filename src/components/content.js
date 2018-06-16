import React, { Component } from 'react';
import Header from './header.js';
import Card from './card.js';

class Content extends Component {
  render() {
    return (
      <div className="background-color">
        <Header />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
