import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from 'react';

// style
import "../../Dashboard/Table/table.css";

const Table = ({tableData}) => {
    const [rowData, setRowData] = useState(tableData);
      
    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "company" },
        { field: "date" },
        { field: "location" },
        { field: "mission" },
        { field: "price" },
        { field: "rocket" },
        { field: "successful" },
        { field: "time" }
    ]);
    
    return (
        <div className='table-container'>
            <div className="ag-theme-quartz">
                <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div>
        </div>
    )
}

export default Table;