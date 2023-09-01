import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid } from "@mui/x-data-grid"

const columns = [
  { field: "elevator", headerName: "Elevator", width: 150 },
  { field: "actionType", headerName: "Action Type", width: 150 },
  { field: "currentFloor", headerName: "Current Floor", width: 150 },
  { field: "targetFloor", headerName: "Target Floor", width: 150 },
  { field: "time", headerName: "Time", width: 150 }
]

const History = ({ actions, setAuthenticated }) => {
  const transformedActions = actions.map((action, index) => ({
    id: index,
    actionType: action.actionType,
    time: action.time,
    currentFloor: action.currentFloor,
    targetFloor: action.targetFloor,
    elevator: action.elevator
  }))

  return (
    <div className="admin-page">
      <div className="title">Admin Page</div>
      <button className="logout-button" onClick={() => setAuthenticated(false)}>
        Logout
      </button>
      <h3>Elevator Actions:</h3>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={transformedActions}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Box>
    </div>
  )
}

export default History
