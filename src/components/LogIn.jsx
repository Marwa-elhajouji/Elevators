import { Link } from "react-router-dom"
const LogIn = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword
}) => {
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
export default LogIn
