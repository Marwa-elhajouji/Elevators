import React, { useState, useEffect } from "react"
import axios from "axios"
import "../styles/internalPanel.css"
import { registerAction } from "../api/elevatorApi"
import {
  calculateArrivalTime,
  calculateTotalSteps,
  calculateIntervalTime
} from "../utils/calculator"



const InternalPanel = ({ floors, title, allowedFloors = floors }) => {
  const [clickedButtons, setClickedButtons] = useState({})
  const [currentAscFloor, setCurrentAscFloor] = useState(3)
  const [floorQueue, setFloorQueue] = useState([])
  const [isMovingUp, setIsMovingUp] = useState(null)
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const doorOpenTime = 5000 //oui il faut monter vite ^^

  const addFloorToQueue = (floor) => {
    setFloorQueue((prev) => [...prev, floor])
  }

  useEffect(() => {
    if (floorQueue.length === 0) return

    const moveToNextFloor = () => {
      const nextFloor = floorQueue[0]
      const remainingFloors = floorQueue.slice(1)

      setIsMovingUp(nextFloor > currentAscFloor) // Set direction
      setIsDoorOpen(false) // Close door

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
          setIsDoorOpen(true) // Open door
          setTimeout(() => {
            setFloorQueue(remainingFloors)
            setClickedButtons({ ...clickedButtons, [nextFloor]: false })
            setIsDoorOpen(false)
          }, doorOpenTime)
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
      actionType: "internal_call",
      currentFloor: currentAscFloor,
      targetFloor: floor,
      time: new Date().toISOString()
    }

    const response = await registerAction(dataToSend)
  }

  return (
    <div className="internal-panel">
      <div className="internal-panel-info">
        {/* <span className="direction-indicator">
          Direction:{" "}
          {isMovingUp !== null ? (isMovingUp ? "Up" : "Down") : "Stopped"}
        </span> */}
        <span className="direction-indicator">
          {isMovingUp !== null ? (
            <span className="arrow-icon">
              {isMovingUp ? (
                <img src="../src/assets/img/arrow-up.png" />
              ) : (
                // <img src="../src/assets/img/arrow-up.png" />
                <img src="../src/assets/img/arrow-down.jpg" />
              )}
            </span>
          ) : (
            <span className="AscenseurStop"> Ascenseur Stopped</span>
          )}
        </span>
        {/* <span>Door: {isDoorOpen ? "Open" : "Closed"}</span> */}
      </div>
      <table className="floor-table">
        <thead>
          <tr>
            <th className="title-header">{title}</th>
          </tr>
        </thead>
        <tbody>
          {floors.map((floor) => (
            <tr key={floor}>
              <td>
                {/* <button
                  // className={clickedButtons[floor] ? "clicked" : "noneClicked"}
                  className={
                    "floor-button " +
                    (clickedButtons[floor] ? "clicked" : "noneClicked")
                  }
                  onClick={() => handleRequestForFloor(floor)}>
                  {floor}
                </button> */}
                <button
                  // className={clickedButtons[floor] ? "clicked" : "noneClicked"}
                  className={
                    "floor-button " +
                    (clickedButtons[floor] ? "clicked" : "noneClicked")
                  }
                  onClick={() => handleRequestForFloor(floor)}>
                  <span class="centered-content">{floor}</span>
                </button>
              </td>
            </tr>
          ))}
          <span className={`door ${isDoorOpen ? "open" : "closed"}`}>
            {" "}
            {isDoorOpen ? "Door Open" : "Door Closed"}
          </span>
        </tbody>
      </table>
    </div>
  )
}

export default InternalPanel
