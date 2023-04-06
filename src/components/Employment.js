import React, { Component } from 'react';
import getDataAsync from '../util/getDataAsync';

class Employment extends Component {
    constructor(props) {
      super(props);
      // Set the initial state
      this.state = {
        employment: {},
        // Set the employmentLoaded flag to false
        employmentLoaded: false,
      };
    }
  
    componentDidMount() {
      // Fetch the employment data from the API
      getDataAsync("employment/").then((response) => {
        // Get the JSON data from the response
        return response.json();
      }).then((json) => {
        // Update the state with the fetched data
        this.setState({
          employment: json,
          // Set the employmentLoaded flag to true
          employmentLoaded: true,
        });
      });
    }

  render() {
    const { employment, employmentLoaded, error } = this.state;

    if (!employmentLoaded) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    return (
      <div>
        {employment.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            {item.content.map((subItem) => (
              <div key={subItem.title}>
                <h3>{subItem.title}</h3>
                <p>{subItem.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Employment;
