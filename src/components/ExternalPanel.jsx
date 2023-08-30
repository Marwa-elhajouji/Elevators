import React, { useState, useEffect } from "react"
import axios from "axios" // N'oubliez pas d'importer axios
import "../styles/externalPanel.css"
import { registerAction } from "../api/elevatorApi"
import { calculateArrivalTime, calculateTotalSteps, calculateIntervalTime } from "../utils/calculator"

const ExternalPanel = ({ floors, title, allowedFloors = floors }) => {
  const [clickedButtons, setClickedButtons] = useState({})
  const [currentAscFloor, setCurrentAscFloor] = useState(3) //

  const moveToFloor = (floor) => {
    setClickedButtons({ ...clickedButtons, [floor]: true }) // Allume le bouton

    const arrivalTime = calculateArrivalTime(currentAscFloor, floor) // Temps total pour atteindre l'étage cible
    const totalSteps = calculateTotalSteps(currentAscFloor, floor); // Nombre total d'étages à parcourir
    const intervalTime = calculateIntervalTime(arrivalTime, totalSteps); // Temps pour atteindre chaque étage intermédiaire

    let nextFloor = currentAscFloor

    const interval = setInterval(() => {
      nextFloor = nextFloor < floor ? nextFloor + 1 : nextFloor - 1
      setCurrentAscFloor(nextFloor) // Met à jour l'étage actuel

      if (nextFloor === floor) {
        clearInterval(interval) // Arrête l'intervalle une fois l'étage cible atteint
        setClickedButtons({ ...clickedButtons, [floor]: false }) // Éteint le bouton
        // Ici, vous pouvez également signaler que les portes sont ouvertes si nécessaire.
      }
    }, intervalTime)
  }

  const handleRequestForFloor = async (floor) => {
    // Ici, on allume le bouton et on déclenche l'ascenseur
    if (!allowedFloors.includes(floor)) {
      console.log("This elevator doesn't stop at this floor.")
      return
    }
    moveToFloor(floor)

    const dataToSend = {
      actionType: "external_call",
      currentFloor: floor,
      time: new Date().toISOString()
    }

    const response = await registerAction(dataToSend)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {floors.map((floor) => (
            <tr key={floor}>
              <td>{floor}</td>
              <td>{currentAscFloor === floor ? "Arrived" : "-"}</td>
              <td>
                <button
                  className={clickedButtons[floor] ? "clicked" : "noneClicked"}
                  onClick={() => handleRequestForFloor(floor)}>
                  {floor}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExternalPanel
