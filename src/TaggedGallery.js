import React, { Component } from 'react';
import Gallery from './Gallery.js'
import TagList from './TagList.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hoverTag: null,
      hoverEntry: null,
    }
    this.onThumbHover = this.onThumbHover.bind(this)
    this.onTagHover = this.onTagHover.bind(this)
  }

  onTagHover(el) {
  //  console.log("tag hover", el)
    if(el !== null) {
      this.setState({ hoverTag: this.props.tags[el]})
    } else {
      this.setState({ hoverTag: null})
    }
  }

  onThumbHover(el) {
    if(el !== null) {
      this.setState({ hoverEntry: this.props.entries[el]})
    } else {
      this.setState({ hoverEntry: null})
    }

  }
  render() {
    var mainGallery = null
      mainGallery = <div>
        <TagList tags={this.props.tags}  hoverEntry={this.state.hoverEntry} onTagHover={this.onTagHover} hoverTag={this.state.hoverTag}/>
        <Gallery
          entries={this.props.entries}
          onSelectEntry={this.props.onSelectEntry}
          hoverTag={this.state.hoverTag}
          onThumbHover={this.onThumbHover}
          hoverEntryUniq={this.state.hoverEntry === null ? null : this.state.hoverEntry.uniq}
        />
      </div>

    return (
      <div className="">
        {mainGallery}
      </div>
    );
  }
}

export default App;
