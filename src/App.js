import React, { Component } from 'react';
import Content from './components/Content';

import CommentBar from './components/CommentBar';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div id="appmain">
        <NavBar/>
        <CommentBar/>
        <Content/>
      </div>
    );
  }
}

export default App;
