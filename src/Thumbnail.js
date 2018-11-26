import React, { Component } from 'react';


class Thumbnail extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('thumb', this.props)
    var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    var innerContent = null
    if(this.props.highlighted === true) innerContent = <div style={{width:'200px', height: '100px'}} className="bg-pink-dark p-2 uppercase"> {this.props.entry.metadata.title} </div>
    return (
      <div className="inline-block m-4 cursor-pointer" onMouseOver={()=>{this.props.onThumbHover(this.props.index)}} onMouseOut={()=>{this.props.onThumbHover(null)}}>
        <img src={thumb} />
        {innerContent}
      </div>
    );
  }
}

export default Thumbnail;
