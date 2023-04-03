import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Degrees from './components/Degrees.js'
import Minors from './components/Minors.js'
import People from './components/People';
import getData from './util/getData.js';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import ischool from './components/assets/ischool.jpg'



export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      about: {},
      aboutLoaded: false
    };
  }

  componentDidMount() {
    //get data
    getData('about/')
      .then((json) => {
        this.setState({
          about: json,
          aboutLoaded: true
        })
      });
    }


  render() {
    const {about, aboutLoaded } = this.state;
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
          <h1>School of Information</h1>
          <h2>Golisano College of Computing and Information Sciences</h2>
        </div>
        
        <Card style={{ width: '50%' }}>
 
          <Card.Body>
            <Card.Title>{about.title}</Card.Title>
            <Card.Text>{about.text}</Card.Text>
            <div className='quoteBubble'>
                <Card.Text>{about.quote}</Card.Text>
                <Card.Subtitle>{about.quoteAuthor}</Card.Subtitle>
              </div>
          </Card.Body>
      </Card>

        <Degrees/>

        <Minors/>

        <People/>

        


      
        
        
      </div>

        

    );
  }
}

export default App;
