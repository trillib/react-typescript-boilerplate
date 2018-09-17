import * as React from 'react';
import './App.css';
import DefaultRouter from './routing/Router';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <DefaultRouter />
      </div>
    );
  }
}

export default App;
