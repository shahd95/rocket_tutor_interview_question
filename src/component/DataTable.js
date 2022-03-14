import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'   // npm install @material-ui/data-grid


// set up the configuration for the header section of our Data Grid table.
const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'first_name', headerName: 'First Name' , width: 200},
  { field: 'last_name', headerName: 'Last Name', width: 200 },
  { field: 'email', headerName: 'Email' , width: 300},
  { field: 'gender', headerName: 'Gender', width: 200},
  { field: 'ip_address', headerName: 'IP Aaddress', width: 200 },
  { field: 'time', headerName: 'Time', width: 200}
]

const DataTable = () => {

  const [tableData, setTableData] = useState([]) // tableData serves as a getter, while the setTableData serves as a setter.

  useEffect(() => {
    fetch('data.json')
      .then((data) => data.json()) // convert the response JSON format.
      .then((data) => setTableData(data)) //  pass the data to the setter.

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        //pageSize={20} // to set a limit to the amount of data that can be displayed at once, the rest of the result is then paginated by default.
      />
    </div>
  )
}

export default DataTable