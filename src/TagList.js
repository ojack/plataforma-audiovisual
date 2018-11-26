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
        {this.props.tags.map((tag) => {
          var color = "bg-black"
          if(this.props.hoverEntry !== null && this.props.hoverEntry.metadata.subject.indexOf(tag.label) > -1) color= "bg-pink-dark"
          return <div className={"inline-block m-1 p-2 text-white cursor-pointer " + color}>{tag.label}</div>
        })}
      </div>
    );
  }
}

export default TagList;
