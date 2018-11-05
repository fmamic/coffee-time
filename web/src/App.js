import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

const NewRoute = () => {
  return (
    <div></div>
  );
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/new"></Route>
      </BrowserRouter>
    );
  }
}

export default App;
