import React, { Component } from 'react';
import Banner from './Banner.js';
import Button from './Button.js'
import './styles/Reset.css';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('/api/random')
      .then(response => {
        if (response.status !== 200 && response.status !== 304) {
          // TODO: ui for errors
          console.log('Couldn\'t fetch /api/random! Response:', response);
          return;
        }

        response
        .json()
        .then(data => {
          console.log('/api/random success: ', data);
          this.setState({data: data});
        })
      })
      .catch(error => {
        console.error('Something terrible happened while fetching /api/random!', error);
      });
  }
  
  yesClicked() {

  }

  noClicked() {

  }

  render() {
    if (this.state.data === null) {
      return (
        <div className='app'>
          <h1 className='app__loadingBanner'>Lataa...</h1>
        </div>
      );
    }

    return (
      <div className='app'>
        <Banner header={this.state.data.banner} plural={this.state.data.plural} />
        <br />
        <div className='app__buttons'>
          <Button label={this.state.data.buttons.yes} color='#51cc84' action={this.yesClicked.bind(this)} />
          <Button label={this.state.data.buttons.no} color='#e5675b' action={this.yesClicked.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
