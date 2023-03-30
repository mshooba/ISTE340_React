import React from 'react';
import getData from '../util/getData';

// Import Bootstrap Card component
import Card from 'react-bootstrap/Card';

export default class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            about: {},
            aboutLoaded: false
        }
    }

    componentDidMount() {
        //get data
        getData('about/')
            .then((json) => {
                //cast data into the object
                this.setState({
                    about: json,
                    aboutLoaded: true
                })
            });
    }

    render(){
        //bring in the state
        const{about, aboutLoaded} = this.state;

        //first case
        if(!aboutLoaded) return (
            <div><h2>About</h2><p>Loading...</p></div>
        );
        //when we have data
        
        return (
            // Wrap the content in a Card component
            <Card className="about">
                <Card.Body>
                    <Card.Title>{about.title}</Card.Title>
                    <Card.Text>{about.description}</Card.Text>
                    <div className="quoteBubble">
                        <Card.Text>{about.quote}</Card.Text>
                        <Card.Subtitle>{about.quoteAuthor}</Card.Subtitle>
                    </div>
                </Card.Body>
            </Card>
        );
    };
}
