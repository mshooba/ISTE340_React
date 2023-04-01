import React from "react";
import Accordion from "react-bootstrap/Accordion";
import getData from "../util/getData";
import { ListGroup } from "react-bootstrap";

export default class Degrees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
      aboutLoaded: false,
    };
  }

  componentDidMount() {
    //get data
    getData("degrees/").then((json) => {
      this.setState({
        degrees: json,
        degreesLoaded: true,
      });
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
        <Accordion  className="custom-accordion" defaultActiveKey="0">
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
                <Accordion.Header>{degree.title}</Accordion.Header>
                <Accordion.Body>
                  {degree.description}
                  {degree.concentrations && (
                    <div>
                      <h5>Concentrations</h5>
                      <ul>
                        {degree.concentrations.map((concentration, j) => (
                          <ListGroup key={j}>{concentration}</ListGroup>
                        ))}
                      </ul>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}

            {/** Start Advanced Certificates */}
            {degrees.graduate[0].availableCertificates && (
              <Accordion.Item
                eventKey={`graduate-${degrees.graduate.length}-certificates`}
                key={`${degrees.graduate.length}-certificates`}
              >
                <Accordion.Header>
                  Advanced Certificates
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {degrees.graduate[0].availableCertificates.map(
                      (certificate, k) => (
                        <ListGroup
                          key={`${k}-certificates-${k}`}
                        >
                          {certificate}
                        </ListGroup>
                      )
                    )}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            )}
            {/** End Advanced Certificates */}
          </Accordion.Item>
          {/** End Graduate Degrees */}
        </Accordion>
      </>
    );
  }
}

