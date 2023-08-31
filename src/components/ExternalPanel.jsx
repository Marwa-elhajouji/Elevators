import React, { useState, useEffect } from "react"
import axios from "axios"
import "../styles/externalPanel.css"
import { registerAction } from "../api/elevatorApi"
import {
  calculateArrivalTime,
  calculateTotalSteps,
  calculateIntervalTime
} from "../utils/calculator"

const ExternalPanel = ({ floors, title, allowedFloors = floors }) => {
  const [clickedButtons, setClickedButtons] = useState({})
  const [currentAscFloor, setCurrentAscFloor] = useState(3)
  const [floorQueue, setFloorQueue] = useState([])

  const addFloorToQueue = (floor) => {
    setFloorQueue((prev) => [...prev, floor])
  }

  useEffect(() => {
    if (floorQueue.length === 0) return

    const moveToNextFloor = () => {
      const nextFloor = floorQueue[0]
      const remainingFloors = floorQueue.slice(1)

      const arrivalTime = calculateArrivalTime(currentAscFloor, nextFloor)
      const totalSteps = calculateTotalSteps(currentAscFloor, nextFloor)
      const intervalTime = calculateIntervalTime(arrivalTime, totalSteps)

      let intermediateFloor = currentAscFloor

      const interval = setInterval(() => {
        if (intermediateFloor < nextFloor) {
          intermediateFloor += 1
        } else {
          intermediateFloor -= 1
        }
        setCurrentAscFloor(intermediateFloor)

        if (intermediateFloor === nextFloor) {
          clearInterval(interval)
          setTimeout(() => {
            setFloorQueue(remainingFloors)
            setClickedButtons({ ...clickedButtons, [nextFloor]: false })
          }, 500)
        }
      }, intervalTime)
    }

    moveToNextFloor()
  }, [floorQueue])

  const handleRequestForFloor = async (floor) => {
    if (!allowedFloors.includes(floor)) {
      console.log("This elevator doesn't stop at this floor.")
      return
    }
    setClickedButtons({ ...clickedButtons, [floor]: true })
    addFloorToQueue(floor)

    const dataToSend = {
      elevator: title,
      actionType: "external_call",
      currentFloor: floor,
      time: new Date().toISOString()
    }

    const response = await registerAction(dataToSend)
  }

  return (
    <div className="container">
      <th className="centered-header">{title}</th>
      <div className="external-panel">
        <table className="floor-table">
          <tbody>
            {floors.map((floor) => (
              <tr key={floor} className="floor">
                <td>{floor}</td>

                <td>
                  <div className="indicator-circle">
                    {currentAscFloor === floor && (
                      <div className="green-indicator"></div>
                    )}
                  </div>
                </td>
                <td>
                  <button
                    className={
                      "floor-button " +
                      (clickedButtons[floor] ? "clicked" : "noneClicked")
                    }
                    onClick={() => handleRequestForFloor(floor)}>
                    {floor}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExternalPanel
