const TIME_BY_EACH_FLOOR = 1000

// export const calculateArrivalTime = (current, target) => {
//     return Math.abs(current - target) * TIME_BY_EACH_FLOOR; // 2000 millisecondes par étage pour simplifier
//   };
export const calculateArrivalTime = (currentFloor, targetFloor) => {
  const floorDifference = Math.abs(targetFloor - currentFloor)
  return floorDifference * TIME_BY_EACH_FLOOR
}

export const calculateTotalSteps = (currentFloor, targetFloor) => {
  return Math.abs(targetFloor - currentFloor)
}

export const calculateIntervalTime = (arrivalTime, totalSteps) => {
  return arrivalTime / totalSteps
}
