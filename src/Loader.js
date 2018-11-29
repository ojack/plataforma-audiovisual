import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this

    return (
      <div class="loader-container">
        <div class="loader">
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__bar"></div>
          <div class="loader__ball"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
