import React, { Component } from 'react';
import Gallery from './Gallery.js'
import TagList from './TagList.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      hoverTag: null,
      hoverEntry: null
    }
    this.onThumbHover = this.onThumbHover.bind(this)
  }

  onThumbHover(el) {
    console.log('hover!!!', this.props.entries[el])
    if(el !== null) {
      this.setState({ hoverEntry: this.props.entries[el]})
    } else {
      this.setState({ hoverEntry: null})
    }

  }
  render() {
    return (
      <div className="max-w-2xl">
        <TagList tags={this.props.tags}  hoverEntry={this.state.hoverEntry}/>
        <Gallery entries={this.props.entries} onThumbHover={this.onThumbHover} hoverEntryUniq={this.state.hoverEntry === null ? null : this.state.hoverEntry.uniq}/>
      </div>
    );
  }
}

export default App;
