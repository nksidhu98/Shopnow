import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src ="avatar.png" className="profile" />
        <img src ="cart.png" className="cart" />
      </div>
      
    );
  }
}

export default Header;
