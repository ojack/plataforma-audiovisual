import React, { Component } from 'react';


class Thumbnail extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('thumb', this.props)
    var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    var innerContent = <div></div>
    if(this.props.highlighted === true) innerContent = <div className="bg-pink-dark p-2 h-full text-2xl uppercase absolute pin-t pin-l"> {this.props.entry.metadata.title} </div>
    // return (
    //   <div
    //     className="m-4 cursor-pointer"
    //     onMouseOver={()=>{this.props.onThumbHover(this.props.index)}}
    //     onMouseOut={()=>{this.props.onThumbHover(null)}}
    //     onMouseDown={()=>{this.props.onSelectEntry(this.props.index)}}
    //     style={{width: '180px', height: '124px', background: 'url(' + thumb + ')'}}
    //     >
    //
    //     {innerContent}
    //   </div>
    // );
    var vidUrl = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.ogg.name
    return <div
        className="w-1/3 cursor-pointer"
        onMouseOver={()=>{this.props.onThumbHover(this.props.index)}}
        onMouseOut={()=>{this.props.onThumbHover(null)}}
        onMouseDown={()=>{this.props.onSelectEntry(this.props.index)}}
        style={{ background: 'url(' + thumb + ')'}}
        >
          <div className="relative">
            <video className="w-full" autoplay="true">
              <source src={vidUrl} type="video/ogg" />
              </video>
              {innerContent}
          </div>
        </div>

  }
}

export default Thumbnail;
