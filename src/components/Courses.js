import React from "react";
import getData from "../util/getData.js";
import CourseModal from "./CourseModal.js"



export default class Courses extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            course: {},
            courseLoaded: false
        }
    }

    componentDidMount() {
        //get data
        getData('course/')
            .then((json) => {
                //cast data into the object
                this.setState({
                    course: json,
                    courseLoaded: true
                })
            });
    }

    render(){
        //bring in the state
        const{course, courseLoaded} = this.state;

        //first case
        if(!courseLoaded) return (
            <div><h2>courses</h2><p>Loading...</p></div>
        );
        //when we have data
        
        return (
        
            <div className="course">
               
                {/* loop through all the courses */}
                <div className="courseList">
                {course.map( (course) => 

                <div className="courseListItem">
                    
                    <div>{course.title}</div>
             
                    <CourseModal {...course}/>
                </div>
                )}
                </div>

                
                
            </div>
            
        )
    }
}
