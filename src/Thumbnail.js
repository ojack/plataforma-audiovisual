import React, { Component } from 'react';


class Thumbnail extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('thumb', this.props)
    var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    return (
      <div className="inline-block m-4 cursor-pointer" onMouseOver={this.props.onThumbHover}>
        <img src={thumb} />
      </div>
    );
  }
}

export default Thumbnail;
