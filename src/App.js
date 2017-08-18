import React, { Component } from 'react';
import {arrayMove} from 'react-sortable-hoc';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Item1', 'Item2', 'Item3', 'Item4']
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} />
      </div>


    );
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  }
}

export default App;
