import React, { Component } from 'react';
import logo from './logo.svg';
import request from 'superagent'
import PlataformaAudiovisual from './PlataformaAudiovisual.js'
import Loader from './Loader.js'

import './App.css';

var baseUrl = 'https://api.archivelab.org/search?q='

var metadataBaseUrl = 'https://archive.org/metadata/'

// get all entries created by Plataforma Bogota of type movie. Returns an array of identifiers that can
// then be used with the metadata api.
// formulate queries using: https://archive.org/advancedsearch.php
//var query = 'creator%3A%28Plataforma%20Bogota%29%20AND%20mediatype%3A%28movies%29'
var query = '%28Gaitan%29%20AND%20mediatype%3A%28movies%29'
// var query = '%28bogota%29%20AND%20mediatype%3A%28movies%29'



class App extends Component {
  constructor() {
    super()
    this.state = {
      entries: [],
      tags: [],
      isLoaded: false,
      error: null
    }
  }

  // When component is loaded, download initial information from internet archive
  componentWillMount() {
    var self = this

    const records = {}
    const tags = {}
    request
      .get(baseUrl + query)
      .end(async (err, res) => {
        if(err) {
          console.log('error', err)
          this.setState({error: err})
        } else {
          console.log('response', res.body.response.docs)
          //this.setState({ recordsAll: res.body.response.docs.map((doc) => doc.identifier)})
          const detailedInfo = Promise.all(
            res.body.response.docs.map( (doc) => (
              request.get(metadataBaseUrl + doc.identifier)//.then((err, res) => res)

            ))
          ).then((resArray) => {
            // process information received from archive api
            const ids = resArray.map((res) => {
              var obj = res.body
              console.log('obj', obj)
              // get thumbnail

              var thumbs = obj.files.filter((file) => file.format=="Item Tile"||file.format=="Thumbnail")
              obj.thumb = thumbs[thumbs.length-1]
              obj.ogg = obj.files.filter((file) => file.format=="Ogg Video")[0]
              obj.mp4 = obj.files.filter((file) => file.format=="MPEG4" || file.format == "h.264")[0]

              if(obj.ogg === undefined || obj.mp4 === undefined) return null
              // add tags to tags list
            if(obj.metadata.subject)  {
              if(!Array.isArray(obj.metadata.subject)){
                var subjectArray = obj.metadata.subject.split(';')
                obj.metadata.subject = subjectArray
                //console.log('sub array', obj.metadata.subject)
              }
                obj.metadata.subject.forEach((tag)=>{
                  // If tags list already contains tag, add to list of entries
                  if(tags[tag]){
                    tags[tag].entries.push(obj)
                  } else {
                    tags[tag] = {
                      label: tag,
                      entries: [obj]
                    }
                  }
                })
            } else {
              obj.metadata.subject = []
            }
              if(obj.ogg !== undefined && obj.mp4 !== undefined) records[res.body.metadata.identifier] = obj
              return res.body.metadata.identifier
            })
            console.log(records, ids, tags)
            self.setState({
              entries: Object.values(records),
              tags: Object.values(tags),
              isLoaded: true
            })
          })

        //  console.log('detailed info', detailedInfo)
        }
      })
  }


  //<PlataformaAudiovisual tags={this.state.tags} entries={this.state.entries}/>

  render() {
    var content = null
    if(this.state.isLoaded === true) {
      content = <PlataformaAudiovisual tags={this.state.tags} entries={this.state.entries}/>
    } else {
      content = <Loader />
    }
    return (
      <div className="flex">
        {content}
      </div>
    );
  }
}

export default App;
