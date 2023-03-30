import './App.css';
import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Degrees from './components/Degrees.js';
import getData from './util/getData.js';
import 'bootstrap/dist/css/bootstrap.min.css';



export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      about: {},
      aboutLoaded: false
    };
  }

  componentDidMount() {
    Promise.all([
      getData('about/'),
    ])
    .then(([aboutJson, degreesJson]) => {
      this.setState({
        about: aboutJson,
        aboutLoaded: true
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { about, aboutLoaded } = this.state;
    if (!aboutLoaded) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      );
    }
    return (
      <div className="App">

        <Header />

        <div className = "title"> 
          <h1>Golisano College of</h1>
          <h2>Computing and Information Sciences</h2>
        </div>

        <About />
        <Degrees />
        
        
      </div>

        

    );
  }
}

export default App;
