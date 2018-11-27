import React, { Component } from 'react';

class EntryDetail extends Component {
  constructor() {
    super()
  }

  render() {
    var self = this
    var vid = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.mp4.name
    return (
      <div>
        <video autoplay="true" controls="true" className="w-full">
          <source src={vid} type="video/mp4" />
        </video>
        <h1 className="m-4"> {this.props.entry.metadata.title} </h1>
        <div className="m-4"> {this.props.entry.metadata.date} </div>
        <p className="m-4" dangerouslySetInnerHTML={{__html: this.props.entry.metadata.description}}></p>
      </div>
    )
  }
}

export default EntryDetail;
