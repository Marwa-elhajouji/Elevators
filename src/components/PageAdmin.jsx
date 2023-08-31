import "../styles/pageAdmin.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AdminPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [actions, setActions] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(
        "http://localhost:3000/admin/actions"
        //  {
        //   auth: { username, password }
        // }
      )
      console.log("data", response.data)
      setAuthenticated(true)
      setActions(response.data)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/admin/signup", {
        username,
        password
      })
      console.log("Signup successful:", response.data)
    } catch (error) {
      console.error("Signup failed:", error)
    }
  }
  useEffect(() => {
    if (authenticated) {
      // Fetch actions here and set the actions state
    }
  }, [authenticated])

  if (!authenticated) {
    return (
      <div className="admin-page">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <div className="signup-button-container">
          <Link to="/signup" className="signup-button-admin">
            SignUp
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-page">
      <div className="title">Admin Page</div>
      <button className="logout-button" onClick={() => setAuthenticated(false)}>
        Logout
      </button>
      <h3>Elevator Actions:</h3>
      <div>
        <table className="table-action">
          <tr>
            {" "}
            {actions.map((action) => (
              <table key={action._id} className="action">
                <td>{action.elevator}</td>
                <td> {action.actionType}</td>
                <td> {action.currentFloor}</td>
                <td> {action.targetFloor}</td>
                <td> {action.time}</td>
              </table>
            ))}
          </tr>
        </table>
      </div>
    </div>
  )
}

export default AdminPage
