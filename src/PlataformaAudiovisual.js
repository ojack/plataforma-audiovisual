import React, { Component } from 'react';
import Gallery from './Gallery.js'
import TagList from './TagList.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedTag: null,
      selectedEntry: null
    }
    this.onThumbHover = this.onThumbHover.bind(this)
  }

  onThumbHover(el) {
    console.log('hover!!!')
  }
  render() {
    return (
      <div className="max-w-2xl">
        <TagList tags={this.props.tags}  />
        <Gallery entries={this.props.entries} onThumbHover={this.onThumbHover} />
      </div>
    );
  }
}

export default App;
