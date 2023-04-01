import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import getData from '../util/getData';
import { ListGroup } from 'react-bootstrap';

export default class Degrees extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            about: {},
            aboutLoaded: false
        };
    }

    componentDidMount() {
        //get data
        getData('degrees/')
            .then((json) => {
                this.setState({
                    degrees: json,
                    degreesLoaded: true
                })
            });
    }

    render() {
        const { degrees, degreesLoaded } = this.state;
      
        if (!degreesLoaded) {
          return (
            <div>
              <h2>Degrees</h2>
              <p>Loading...</p>
            </div>
          );
        }
      
        return ( 
            <>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="undergraduate">
                <h3>Undergraduate Degrees</h3>
                {degrees.undergraduate.map((degree, index) => (
                <Accordion.Item eventKey={`undergraduate-${index}`} key={index}>
                    <Accordion.Header>{degree.title}</Accordion.Header>
                    <Accordion.Body>
                    {degree.description}
                    <ul>
                        <h5>Concentrations</h5>
                        {degree.concentrations.map((concentration, i) => (
                        <ListGroup key={i}>{concentration}</ListGroup>
                        ))}
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion.Item>
            <Accordion.Item eventKey="graduate">
                <h3>Graduate Degrees</h3>
                {degrees.graduate.map((degree, index) => (
                <Accordion.Item eventKey={`graduate-${index}`} key={index}>
                    <Accordion.Header>{degree.title}</Accordion.Header>
                    <Accordion.Body>
                    {degree.description}
                    {degree.availableCertificates && (
                        <div>
                        <h2>Available Certificates</h2>
                        <ul>
                            {degree.availableCertificates.map((certificate, i) => (
                            <li key={i}>{certificate}</li> 
                            ))} 
                        </ul>
                        </div>
                    )}
                    {degree.concentrations && (
                        <div>
                        <h5>Concentrations</h5>
                        <ul>
                            {degree.concentrations.map((concentration, i) => (
                            <ListGroup key={i}>{concentration}</ListGroup>
                            ))}
                        </ul>
                        </div>
                    )}
                    </Accordion.Body>
                </Accordion.Item>
                ))}
            </Accordion.Item>
            </Accordion>
            </>
          );
        }
      }