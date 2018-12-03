import React, { Component } from 'react';
import FirstContent from './FirstContent';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div className="myheader">
        <FirstContent />
      </div>
    );
  }
}

export default Header;
