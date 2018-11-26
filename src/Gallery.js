import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'

class Gallery extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this
    return (
      <div className="mt-20">
        {this.props.entries.map((entry, index) =>
          <Thumbnail {...self.props} entry={entry} highlighted={entry.uniq === this.props.hoverEntryUniq ? true : false} key={index} index={index}/>)}
      </div>
    );
  }
}

export default Gallery;
