import React, { Component } from 'react';
import TaggedGallery from './TaggedGallery.js'
import { withRouter, Route, Link} from "react-router-dom";

class EntryDetail extends Component {
  constructor() {
    super()
  }

  render() {
    var entryObj = null
    if(this.props.match.params.identifier) {
      this.props.entries.forEach(entry => {
        if(this.props.match.params.identifier === entry.metadata.identifier){
          entryObj = entry
        }
      })
    } else {
      // to do: do something for entry not found
    }

    console.log('tags', this.props)
    var self = this
    var vid = 'http://' + entryObj.d1 + entryObj.dir + '/' + entryObj.mp4.name
  //  var tags = entryObj.metadata.content
    var entryArray = []
    var entries = []

    this.props.tags.forEach((tag) => {
      tag.entries.forEach((entry) => {
        if(entry.uniq !== entryObj.uniq) {
          var index = entryArray.indexOf(entry.uniq < 0)
          console.log(entry.uniq, entryArray, index)
          if(index < 0) {
            entryArray.push(entry.uniq)
            entries.push(entry)
          }
        }
      })
      }
    )
    console.log('entry array', entryArray)


    //var entries = entryArray.map()
    return (
      <div className="mb-10">
        <video autoPlay={true} controls={true} className="w-full">
          <source src={vid} type="video/mp4" />
        </video>
        <h1 className="m-6"> {entryObj.metadata.title} </h1>
        <div className="m-6"> {entryObj.metadata.date} </div>
        <p className="m-6" dangerouslySetInnerHTML={{__html: entryObj.metadata.description}}></p>
        <h3 className="m-6"> Relacionados: </h3>
        <TaggedGallery entries={entries} tags={this.props.tags} onSelectEntry={this.props.onSelectEntry}/>
      </div>
    )
  }
}

export default withRouter(EntryDetail);
