import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this

    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
