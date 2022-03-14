to create Frontend with React Typescript:
-----------------------------------------
npx create-react-app app_name --template typescript


to start the APP:
-----------------
npm start

to install packages (Material UI and the Data Grid):
----------------------------------------------------
npm install @material-ui/data-grid


*in the src directory, create new folder called components and in it create new file called DataTable.js.

/*
In the DataTable.js file, we will use a functional component. In this functional component, we will implement some of the following default features in React:

useState hook: helps us track state in a functional component.

useEffect hook: allows us to handle side effects in our functional component. 

The Fetch API: allows web browsers to make HTTP requests to web servers. The request can be of any APIs that send and receive data in JSON or XML format.
*/

use Mock.json file As API:
**************************
1) first import useState and useEffect hooks:

import React, { useState, useEffect } from 'react'

2) create a variable using the useState hook:

const [tableData, setTableData] = useState([])

public REST API called JSONPlaceholder

3)Finally, to access our data we will use the useEffect hook and the Fetch API




To display our API results in the Material UI Data Grid,import the Data Grid package into our DataTable.js file:
----------------------------------------------------------------------------------------------------------------
import { DataGrid } from '@mui/x-data-grid'



