import React, { Component } from 'react';
import './App.css';
import Banner from './Banner.js';
import Buttons from './Buttons.js'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('/api/random')
      .then(response => {
        if (response.status !== 200 && response.status !== 304) {
          console.group('Couldn\'t fetch /api/random! Response:');
          console.log(response);
          console.groupEnd();
          return;
        }

        response.json().then(data => {
          console.group('/api/random success: ');
          console.log(data);
          console.groupEnd();
          this.setState({data: data});
        })
      })
      .catch(error => {
        console.error('Something terrible happened while fetching /api/random!', error);
      });
  }
  
  render() {
    if (this.state.data === null) {
      return (
        <div className='App'>
          <h1>Lataa...</h1>
        </div>
      );
    }

    return (
      <div className='App'>
        <Banner header={this.state.data.banner} plural={this.state.data.plural} />
        <Buttons labels={this.state.data.buttons} />
      </div>
    );
  }
}

export default App;
