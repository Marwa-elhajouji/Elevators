import { Link } from "react-router-dom"

import "../styles/header.css"
const Header = () => {
  return (
    <div className="element-header">
      <Link to="/">Home</Link>
      {/* <div className="barre-recherche">Recherche</div> */}
      {/* <BarreDeRecherche/> */}
      <div className="buttons">
        <Link to="/externalPanels">ExternalPenels</Link>

        <Link to="/internalPanels">InternalPanels</Link>

        <Link to="/pageAdmin">Page Admin</Link>
      </div>
    </div>
  )
}
export default Header
