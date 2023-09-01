import "../styles/pageAdmin.css"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import History from "./History"
import LogIn from "./LogIn"

const AdminPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [actions, setActions] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get("http://localhost:3000/admin/actions", {
        headers: {
          Authorization: `Basic ${btoa(`${username}:${password}`)}`
        }
      })
      console.log("data", response.data)
      if (response.status === 200) {
        setAuthenticated(true)
        setActions(response.data)
      } else {
        alert("Login failed")
      }
    } catch (error) {
      alert("Login failed")
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

  if (!authenticated) {
    return (
      <LogIn
        handleLogin={handleLogin}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    )
  }

  return <History actions={actions} setAuthenticated={setAuthenticated} />
}

export default AdminPage
