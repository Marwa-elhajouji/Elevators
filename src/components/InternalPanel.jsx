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

    const sortedQueue = [...floorQueue].sort((a, b) => a - b)
    if (isMovingUp === false) {
      sortedQueue.reverse()
    }

    const moveToNextFloor = () => {
      const nextFloor = sortedQueue[0]
      const remainingFloors = sortedQueue.slice(1)

      setIsMovingUp(nextFloor > currentAscFloor)
      setIsDoorOpen(false)

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
          setIsDoorOpen(true)
          setTimeout(() => {
            setFloorQueue(remainingFloors)

            setIsDoorOpen(false)
          }, doorOpenTime)
          setClickedButtons({ ...clickedButtons, [nextFloor]: false })
        }
      }, intervalTime)
    }

    moveToNextFloor()
  }, [floorQueue, isMovingUp])

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
    <div className="container">
      <div className="title-header">{title}</div>
      <div className="internal-panel">
        <div className="internal-panel-info">
          <span className="direction-indicator">
            {isMovingUp !== null ? (
              <span className="arrow-icon">
                {isMovingUp ? (
                  <div>
                    <img src="../src/assets/img/arrow-up.png" />
                    <div>{currentAscFloor}</div>
                  </div>
                ) : (
                  <div>
                    <img src="../src/assets/img/arrow-down.jpg" />
                    <div>{currentAscFloor}</div>
                  </div>
                )}
              </span>
            ) : (
              <span className="AscenseurStop"> Ascenseur Stopped</span>
            )}
          </span>
          <table className="floor-table">
            <tbody>
              {floors.map((floor) => (
                <tr key={floor}>
                  <td>
                    <button
                      className={
                        "floor-button " +
                        (clickedButtons[floor] ? "clicked" : "noneClicked")
                      }
                      onClick={() => handleRequestForFloor(floor)}>
                      <span className="centered-content">{floor}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <span className={`door ${isDoorOpen ? "open" : "closed"}`}>
            {isDoorOpen ? "Door Open" : "Door Closed"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default InternalPanel
