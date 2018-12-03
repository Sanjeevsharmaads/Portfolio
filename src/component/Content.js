import React, { Component } from 'react';
import SubContent1 from './SubContent1';
import SubContent2 from './SubContent2';
import '../App.css';

class MainContent extends Component {
  render() {
    return (
      <div className="sc-hXhGGG cVSIJp">
        <SubContent1/>
        <SubContent2 />
      </div>
    );
  }
}

export default MainContent;
