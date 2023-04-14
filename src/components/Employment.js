import React from "react";
import getData from "../util/getData";

export default class Employment extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial state
    this.state = {
      coops: [],
      proEmployment: [],
      // Set the coopsLoaded, proEmploymentLoaded, employmentLoaded, and statisticsLoaded flags to false
      coopsLoaded: false,
      proEmploymentLoaded: false,
      employmentLoaded: false,
      statisticsLoaded: false,
      employersLoaded: false,
      careersLoaded: false,
    };
  }

  componentDidMount() {
    // Fetch the data from the API
    getData("employment/").then((json) => {
      // Update the state with the fetched data
      this.setState({
        employment: json.introduction,
        statistics: json.degreeStatistics.statistics,
        employers: json.employers,
        careers: json.careers,
        // Set the employmentLoaded, statisticsLoaded, employersLoaded, and careersLoaded flags to true
        employmentLoaded: true,
        statisticsLoaded: true,
        employersLoaded: true,
        careersLoaded: true,
      });
    });
  }

  render() {
    // Destructure the employment, employmentLoaded, statistics, statisticsLoaded, employers, and careers values from the state
    const {
      employment,
      employmentLoaded,
      statistics,
      statisticsLoaded,
      employers,
      employersLoaded,
      careers,
      careersLoaded,
    } = this.state;

    if (!employmentLoaded || !statisticsLoaded || !employersLoaded || !careersLoaded) {
      // If the data is not loaded yet, show a loading message
      return (
        <div>
          <h2>Employment</h2>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <div className="employment-intro">
          <h2>{employment.title}</h2>
          {employment.content.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className="employment-statistics">
          <h2>{statistics.title}</h2>
          {statistics.map((stat, index) => (
            <div key={index}>
              <h3>{stat.description}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="employment-employers">
          <h2>{employers.title}</h2>
          {employers.employerNames.map((employer, index) => (
            <div key={index}>
              <p>{employer}</p>
            </div>
          ))}
        </div>
        <div className="employment-careers">
          <h2>{careers.title}</h2>
          {careers.careerNames.map((career, index) => (
            <div key={index}>
              <p>{career}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
