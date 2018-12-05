import React, { Component } from 'react';
import transparent from './assets/1px-01.png'
import config from './config.json'

class Thumbnail extends Component {
  constructor() {
    super()
  }

  render() {
  //  console.log('thumb', this.props)
    var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    var innerContent = <div></div>
    if(this.props.highlighted === true) innerContent = <div className="p-2 h-full text-3xl text-white uppercase absolute pin-t pin-l" style={{backgroundColor: config.color}}> {this.props.entry.metadata.title} </div>
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

    //style={{ background: 'url(' + thumb + ')', backgroundSize: 'cover'}}
    var vidUrl = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.ogg.name
    return <div
        className="w-full cursor-pointer"
        onMouseOver={()=>{this.props.onThumbHover(this.props.index)}}
        onMouseOut={()=>{this.props.onThumbHover(null)}}
        onMouseDown={()=>{this.props.onSelectEntry(this.props.index)}}
        style={{ background: 'url(' + thumb + ')', backgroundSize: 'cover'}}
        >
          <div className="relative">
            <video className="w-full" autoPlay={true} muted={true} loop={true} poster={transparent}>
              <source src={vidUrl} type="video/ogg" />
              </video>
              {innerContent}
          </div>
        </div>

  }
}

export default Thumbnail;
