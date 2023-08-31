import axios from "axios"

export const registerAction = async (dataToSend) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/registerAction",
      dataToSend,
      { headers: { "Content-Type": "application/json" } }
    )
    return response.data
  } catch (error) {
    console.error("There was a problem sending the data:", error)
  }
}
