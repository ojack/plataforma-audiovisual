import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'

class Gallery extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this
    return (
      <div className="">
        {this.props.entries.map((entry, index) => <Thumbnail {...self.props} entry={entry} key={index} />)}
      </div>
    );
  }
}

export default Gallery;
