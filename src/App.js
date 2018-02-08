import React, { Component } from 'react';
import Routes from './routes/Routes';

// imported naviagation bar to the root folder because its not going to change
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="contain">
       <Navigation/>
       <Routes/>
      </div>
    );
  }
}

export default App;
