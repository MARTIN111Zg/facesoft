import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'becb5f6d9b734252bd0b5f48b270028b'
});

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}


class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
    }
  }
  onInputChange=(event)=>{
    console.log(event.target.value);
  }
  onButtonSubmit=(event)=>{
    console.log('clic');
    app.models.predict(Clarifai.COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
    console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
         params={particlesOptions}
       />
        <Navigation />
       <Logo/>
       <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange}
                        onButtonSubmit={this.onButtonSubmit}
          />
        <FaceRecognition/>

      </div>
    );
  }
}

export default App;
