import React, { Component } from 'react';


class TagList extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('thumb', this.props)
    //var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    return (
      <div className="w-full m-4 mt-20 p-6">
        {this.props.tags.map((tag) => <div className="inline-block m-1 p-1 bg-black text-white cursor-pointer">{tag.label}</div>)}
      </div>
    );
  }
}

export default TagList;
