import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js'
import { Link } from "react-router-dom";

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
          return (
            <Link to={'/item/'+entry.metadata.identifier} className="w-1/3 cursor-pointer">
              <Thumbnail {...self.props} entry={entry} highlighted={highlighted} key={index} index={index}/>
            </Link>
          )
        })
        }
      </div>
    );
  }
}

export default Gallery;
