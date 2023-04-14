import React from "react";
import Accordion from "react-bootstrap/Accordion";
import getData from "../util/getData";
import Button from "react-bootstrap/Button";
import CourseModal from "./CourseModal";

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

  handleOpenModal = (title, courseID, description) => {
    this.setState({
      showModal: true,
      modalCourse: title, courseID, description
    });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    const { minors, minorsLoaded, showModal, modalCourse } = this.state;

    // ...

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
                      <Button key={i} onClick={() => this.handleOpenModal(course)}>
                        {course}
                      </Button>
                    ))}
                  </ul>
                  {minor.note && <p>Note: {minor.note}</p>}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion.Item>
        </Accordion>

        {showModal && (
          <CourseModal
          course={modalCourse}
          handleCloseModal={this.handleCloseModal}
          show={showModal}
        />
        )}
      </>
    );
  }
}