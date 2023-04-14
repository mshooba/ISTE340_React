import React from "react";
import getData from "../util/getData.js";
import PeopleModal from "./PeopleModal.js"


export default class People extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            people: {},
            peopleLoaded: false
        }
    }

    componentDidMount() {
        //get data
        getData('people/')
            .then((json) => {
                //cast data into the object
                this.setState({
                    people: json,
                    peopleLoaded: true
                })
            });
    }

    render(){
        //bring in the state
        const{people, peopleLoaded} = this.state;

        //first case
        if(!peopleLoaded) return (
            <div><h2>Faculty</h2><p>Loading...</p></div>
        );
        //when we have data
        
        return (
        
            <div className="people">
                <div className="peopleTitle">
                    <h2>{people.title}</h2>
                    <h6>{people.subTitle}</h6>
                    <h3>Faculty</h3>
                </div>
                {/* loop through all the faculty (p is the person) */}
                <div className="peopleList">
                {people.faculty.map( (person) => 

                <div className="peopleListItem">
                    <img src={person.imagePath} style={{maxWidth:"150px"}}/>
                    
             
                    <PeopleModal {...person}/>
                </div>
                )}
                </div>

                <div className="peopleTitle">   
                    <h3>Staff</h3>
                </div>
                {/* loop through all the faculty (p is the person) */}
                <div className="peopleList">
                {people.staff.map( (person) => 

                <div className="peopleListItem">
                    <img src={person.imagePath} style={{maxWidth:"150px"}}/>
                    <div>{person.name}</div>
                    <PeopleModal {...person}/>
                </div>
                )}
                </div>
                
            </div>
            
        )
    }
}
