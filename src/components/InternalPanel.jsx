// //

// import React, { useState } from "react"
// import "../styles/InternalPanel.css"
// import { calculateArrivalTime } from "../utils/calculator" // Assuming you're only using calculateArrivalTime here

// const InternalPanel = ({ floors, title, allowedFloors = floors }) => {
//   const [clickedButtons, setClickedButtons] = useState({})
//   const [currentAscFloor, setCurrentAscFloor] = useState(3)

//   const moveToFloor = (floor) => {
//     setClickedButtons({ ...clickedButtons, [floor]: true })

//     const arrivalTime = calculateArrivalTime(currentAscFloor, floor)
//     setTimeout(() => {
//       setCurrentAscFloor(floor)
//       const newClickedButtons = { ...clickedButtons }
//       newClickedButtons[floor] = false
//       setClickedButtons(newClickedButtons)
//     }, arrivalTime)
//   }

//   const handleRequestForFloor = async (floor) => {
//     if (!allowedFloors.includes(floor)) {
//       console.log("This elevator doesn't stop at this floor.")
//       return
//     }
//     moveToFloor(floor)
//   }
//   const directionIndicator =
//     currentAscFloor < clickedFloor ? "Going Up" : "Going Down"
//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>{title}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {floors.map((floor) => (
//             <tr key={floor}>
//               <td>
//                 <button
//                   className={clickedButtons[floor] ? "clicked" : "noneClicked"}
//                   onClick={() => handleRequestForFloor(floor)}>
//                   {floor}
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td></td>
//           </tr>
//           {directionIndicator}
//           <tr>
//             <td>Voyant2</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default InternalPanel

// import React, { useState } from "react"
// import "../styles/InternalPanel.css"
// import { calculateArrivalTime } from "../utils/calculator"

// const InternalPanel = ({ floors, title, allowedFloors = floors }) => {
//   const [clickedButtons, setClickedButtons] = useState({})
//   const [currentAscFloor, setCurrentAscFloor] = useState(3)

//   const moveToFloor = (floor) => {
//     setClickedButtons({ ...clickedButtons, [floor]: true })

//     const arrivalTime = calculateArrivalTime(currentAscFloor, floor)
//     setTimeout(() => {
//       setCurrentAscFloor(floor)
//       const newClickedButtons = { ...clickedButtons }
//       newClickedButtons[floor] = false
//       setClickedButtons(newClickedButtons)
//     }, arrivalTime)
//   }

//   const handleRequestForFloor = async (floor) => {
//     if (!allowedFloors.includes(floor)) {
//       console.log("This elevator doesn't stop at this floor.")
//       return
//     }
//     moveToFloor(floor)
//   }

//   const directionIndicator =
//     currentAscFloor < floors[0] ? "Going Up" : "Going Down"

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>{title}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {floors.map((floor) => (
//             <tr key={floor}>
//               <td>
//                 <button
//                   className={clickedButtons[floor] ? "clicked" : "noneClicked"}
//                   onClick={() => handleRequestForFloor(floor)}>
//                   {floor}
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{directionIndicator}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default InternalPanel

// import React, { useState } from "react"
// import "../styles/InternalPanel.css"
// import { calculateArrivalTime } from "../utils/calculator"

// const InternalPanel = ({ floors, title, allowedFloors = floors }) => {
//   const [clickedButtons, setClickedButtons] = useState({})
//   const [currentAscFloor, setCurrentAscFloor] = useState(3)

//   const moveToFloor = (floor) => {
//     setClickedButtons({ ...clickedButtons, [floor]: true })

//     const arrivalTime = calculateArrivalTime(currentAscFloor, floor)
//     setTimeout(() => {
//       setCurrentAscFloor(floor)
//       const newClickedButtons = { ...clickedButtons }
//       newClickedButtons[floor] = false
//       setClickedButtons(newClickedButtons)
//     }, arrivalTime)
//   }

//   const handleRequestForFloor = async (floor) => {
//     if (!allowedFloors.includes(floor)) {
//       console.log("This elevator doesn't stop at this floor.")
//       return
//     }
//     moveToFloor(floor)
//   }

//   const directionIndicator =
//     nextFloor !== null
//       ? nextFloor > currentAscFloor
//         ? "Going Up"
//         : "Going Down"
//       : "Idle"

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>{title}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {floors.map((floor) => (
//             <tr key={floor}>
//               <td>
//                 <button
//                   className={clickedButtons[floor] ? "clicked" : "noneClicked"}
//                   onClick={() => handleRequestForFloor(floor)}>
//                   {floor}
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{directionIndicator}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default InternalPanel

// import React, { useState } from "react"
// import "../styles/InternalPanel.css"
// import { calculateArrivalTime } from "../utils/calculator"

// const InternalPanel = ({ floors, title, allowedFloors = floors }) => {
//   const [clickedButtons, setClickedButtons] = useState({})
//   const [currentAscFloor, setCurrentAscFloor] = useState(3)
//   const [nextFloor, setNextFloor] = useState(null)

//   const moveToFloor = (floor) => {
//     setClickedButtons({ ...clickedButtons, [floor]: true })

//     const arrivalTime = calculateArrivalTime(currentAscFloor, floor)
//     setTimeout(() => {
//       setCurrentAscFloor(floor)
//       setNextFloor(null) // Reset nextFloor after reaching the target floor
//       const newClickedButtons = { ...clickedButtons }
//       newClickedButtons[floor] = false
//       setClickedButtons(newClickedButtons)
//     }, arrivalTime)
//   }

//   const handleRequestForFloor = async (floor) => {
//     if (!allowedFloors.includes(floor)) {
//       console.log("This elevator doesn't stop at this floor.")
//       return
//     }
//     if (nextFloor === null) {
//       setNextFloor(floor)
//     } else {
//       moveToFloor(floor)
//     }
//   }

//   const directionIndicator =
//     nextFloor !== null
//       ? nextFloor > currentAscFloor
//         ? "Going Up"
//         : "Going Down"
//       : "-"

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>{title}</th>
//           </tr>
//         </thead>
//         <tbody>
//           {floors.map((floor) => (
//             <tr key={floor}>
//               <td>
//                 <button
//                   className={clickedButtons[floor] ? "clicked" : "noneClicked"}
//                   onClick={() => handleRequestForFloor(floor)}>
//                   {floor}
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>{directionIndicator}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default InternalPanel

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
    <div>
      <div>
        <span>
          Direction:{" "}
          {isMovingUp !== null ? (isMovingUp ? "Up" : "Down") : "Stopped"}
        </span>
        <span>Door: {isDoorOpen ? "Open" : "Closed"}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>{title}</th>
          </tr>
        </thead>
        <tbody>
          {floors.map((floor) => (
            <tr key={floor}>
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

export default InternalPanel
