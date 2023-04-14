import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import getData from "../util/getData";



export default class CoopTable extends React.Component {
    constructor(props) {
        super(props);
        // Set the initial state
        this.state = {
            coopTableData: [],
            // Set the coopTableLoaded flag to false
            coopTableLoaded: false,
        };
    }

    componentDidMount() {
        // Fetch the co-op table data from the API
        getData("employment/coopTable/coopInformation").then((json) => {
            // Update the state with the fetched data
            this.setState({
                coopTableData: json.coopInformation,
                // Set the coopTableLoaded flag to true
                coopTableLoaded: true,
            });

            
        });
    }

    render() {
        // Destructure the coopTableData and coopTableLoaded values from the state
        const { coopTableData, coopTableLoaded } = this.state;

        if (!coopTableLoaded) {
            // If the co-op table data is not loaded yet, show a loading message
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }

        // Define the columns for the data grid
        const columns = [
            { field: "employer", headerName: "Employer", width: 150 },
            { field: "degree", headerName: "Degree", width: 150 },
            { field: "city", headerName: "City", width: 150 },
            { field: "term", headerName: "Term", width: 150 },
        ];

        return (
            <div>
                <div style={{ height: 400, width: "50%", margin: "100px" }}>
                <h2>Co-op Table</h2>
                <DataGrid
                    rows={coopTableData}
                    columns={columns}
                    pageSize={5}
                    getRowId={(row) => row.employer + row.degree + row.city + row.term}
                />
                </div>
            </div>
          );
        }
}
