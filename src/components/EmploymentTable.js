import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import getData from "../util/getData";

export default class EmploymentTable extends React.Component {
    constructor(props) {
        super(props);
        // Set the initial state
        this.state = {
            employmentTableData: [],
            // Set the coopTableLoaded flag to false
            employmentTableLoaded: false,
        };
    }

    componentDidMount() {
        // Fetch the co-op table data from the API
        getData("employment/employmentTable/professionalEmploymentInformation").then((json) => {
            console.log(json);
            // Update the state with the fetched data
            this.setState({
                employmentTableData: json.professionalEmploymentInformation,
                // Set the coopTableLoaded flag to true
                employmentTableLoaded: true,
            });

            
        });
    }

    render() {
        // Destructure the employmentTableData and employmentTableLoaded values from the state
        const { employmentTableData, employmentTableLoaded } = this.state;
    
        if (!employmentTableLoaded) {
            // If the data is not loaded yet, show a loading message
            return (
                <div>
                    <h2>Professional Employment Information</h2>
                    <p>Loading...</p>
                </div>
            );
        }
    
       
    
        // Define the columns for the data grid
        const columns = [
            { field: "employer", headerName: "Employer", headerClassName: 'super-app-theme--header', width: 150 },
            { field: "degree", headerName: "Degree", width: 150 },
            { field: "city", headerName: "City", width: 150 },
            { field: "title", headerName: "Title", width: 150 },
            { field: "startDate", headerName: "Start Date", width: 150 },
        ];
    
        return (
            <div style={{ height: 400, width: "50%", margin: "100px" }}>
                <h2>Employment Table</h2>
                <DataGrid
                    rows={employmentTableData}
                    columns={columns}
                    pageSize={5}
                    getRowId={(row) => row.employer + row.degree + row.city + row.title + row.startDate}
                    sx={{ m: 2 }}
                />
            </div>
        );
    }
}