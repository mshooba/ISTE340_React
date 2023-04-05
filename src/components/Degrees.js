import React from "react";
import Accordion from "react-bootstrap/Accordion";
import getData from "../util/getData";
import { ListGroup } from "react-bootstrap";

export default class Degrees extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial state
    this.state = {
      about: {},
      // Set the aboutLoaded flag to false
      aboutLoaded: false,
    };
  }

  componentDidMount() {
    // Fetch the degree data from the API
    getData("degrees/").then((json) => {
      // Update the state with the fetched data
      this.setState({
        degrees: json,
        // Set the degreesLoaded flag to true
        degreesLoaded: true,
      });
    });
  }

  render() {
    // Destructure the degrees and degreesLoaded values from the state
    const { degrees, degreesLoaded } = this.state;

    if (!degreesLoaded) {
      // If the degrees data is not loaded yet, show a loading message
      return (
        <div>
          <h2>Degrees</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <>
        <Accordion className="custom-accordion" defaultActiveKey="0" flush>
          {/** Start Undergraduate Degrees */}
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
                      // Display the concentrations in a list
                      <ListGroup key={i}>{concentration}</ListGroup>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion.Item>

          {/** Start Graduate Degrees */}
          <Accordion.Item eventKey="graduate">
            <h3>Graduate Degrees</h3>
            {degrees.graduate.map((degree, i) => (
              <Accordion.Item eventKey={`graduate-${i}`} key={i}>
                <Accordion.Header>
                  {degree.title}
                  {i === degrees.graduate.length - 1 && degree.availableCertificates && (
                    <div>
                      {/* Capitalize the first letter of each word in the degree name */}
                      {degree.degreeName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                  )}
                </Accordion.Header>
                <Accordion.Body>
                  {degree.description}
                  {degree.concentrations && (
                    <div>
                      <h5>Concentrations</h5>
                      <ul>
                        {degree.concentrations.map((concentration, j) => (
                          // Display the concentrations in a list
                          <ListGroup key={j}>{concentration}</ListGroup>
                        ))}
                      </ul>
                    </div>
                  )}

                  {degree.availableCertificates && (
                    <div>
                      <ul>
                        {degree.availableCertificates.map((certificate, k) => (
                          // Display the available certificates in a list
                          <ListGroup key={k}>{certificate}</ListGroup>
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
