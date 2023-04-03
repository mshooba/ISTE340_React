import React from "react";
import Accordion from "react-bootstrap/Accordion";
import getData from "../util/getData";
import { ListGroup } from "react-bootstrap";

export default class Degrees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minors: [],
      minorsLoaded: false,
    };
  }

  componentDidMount() {
    getData("minors/").then((json) => {
      this.setState({
        minors: json.UgMinors,
        minorsLoaded: true,
      });
    });
  }

  render() {
    const { minors, minorsLoaded } = this.state;

    if (!minorsLoaded) {
      return (
        <div>
          <h2>Minors</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <>
        <Accordion className="custom-accordion" defaultActiveKey="0" flush>
          <Accordion.Item eventKey="minors">
            <h3>Minors</h3>
            {minors.map((minor, index) => (
              <Accordion.Item eventKey={`undergraduate-${index}`} key={index}>
                <Accordion.Header>{minor.title}</Accordion.Header>
                <Accordion.Body>
                  {minor.description}
                  <ul>
                    <h5>Courses</h5>
                    {minor.courses.map((course, i) => (
                      <ListGroup key={i}>{course}</ListGroup>
                    ))}
                  </ul>
                  {minor.note && <p>Note: {minor.note}</p>}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}
