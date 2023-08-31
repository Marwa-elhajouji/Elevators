import { Link } from "react-router-dom"

import "../styles/header.css"
const Header = () => {
  return (
    <>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/externalPanels">ExternalPeaels</Link>
        <Link to="/internalPanels">InternalPanels</Link>
        <Link to="/pageAdmin">Page Admin</Link>
      </div>
    </>
  )
}
export default Header
