import React, { Component } from 'react';


class TagList extends Component {
  constructor() {
    super()
  }

  render() {
    console.log('thumb', this.props)
    //var thumb = 'http://' + this.props.entry.d1 + this.props.entry.dir + '/' + this.props.entry.thumb.name
    return (
      <div className="w-full m-4">
        {this.props.tags.map((tag, index) => {
          var color = "bg-black"
          if(this.props.hoverEntry !== null && this.props.hoverEntry.metadata.subject.indexOf(tag.label) > -1) color= "bg-pink-dark"
          if(this.props.hoverTag !== null && this.props.hoverTag.label === tag.label) color= "bg-pink-dark"
          return <div
            className={"inline-block m-1 p-2 text-white cursor-pointer " + color}
            onMouseOver={()=>this.props.onTagHover(index)}
            onMouseOut={()=>this.props.onTagHover(null)}
            >
              {tag.label}</div>
        })}
      </div>
    );
  }
}

export default TagList;
