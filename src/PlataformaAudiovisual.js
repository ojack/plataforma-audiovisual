import React, { Component } from 'react';
import TaggedGallery from './TaggedGallery.js'
import EntryDetail from './EntryDetail.js'
import { Route, Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedEntry: null
    }
    this.onSelectEntry = this.onSelectEntry.bind(this)
  }

  onSelectEntry(el) {
    if(el !== null) {
      this.setState({ selectedEntry: this.props.entries[el]})
    } else {
      this.setState({ selectedEntry: null})
    }
  }

  render() {
    // var mainGallery = null
    // if(this.state.selectedEntry !== null) {
    //   mainGallery = <EntryDetail entry={this.state.selectedEntry} tags={this.props.tags} onSelectEntry={this.onSelectEntry}/>
    // } else {
    //   mainGallery = <TaggedGallery
    //     tags={this.props.tags}
    //     entries={this.props.entries}
    //     onSelectEntry={this.onSelectEntry}
    //   />
    // }
    // <Switch>
    //   <Route exact path="/">
    //     <PlataformaAudiovisual tags={this.state.tags} entries={this.state.entries}/>
    //   </Route>
    // </Switch>
    return (
      <div className="">
      <Switch>
        <Route exact path="/">
              <TaggedGallery
                tags={this.props.tags}
                entries={this.props.entries}
                onSelectEntry={this.onSelectEntry}
              />
        </Route>
        <Route path="/item/:identifier">
              <EntryDetail entry={this.state.selectedEntry} tags={this.props.tags} entries={this.props.entries} onSelectEntry={this.onSelectEntry}/>
        </Route>
      </Switch>
      </div>
    );
  }
}

export default App;
