import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'

class Gallery extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this

    return (
      <div className="flex flex-wrap">
        {this.props.entries.map((entry, index) => {
          var highlighted = false
          if(entry.uniq === this.props.hoverEntryUniq) highlighted = true
          if(this.props.hoverTag !== null && entry.metadata.subject.indexOf(this.props.hoverTag.label) >= 0) highlighted = true
          return (<Thumbnail {...self.props} entry={entry} highlighted={highlighted} key={index} index={index}/>)
        })
        }
      </div>
    );
  }
}

export default Gallery;
