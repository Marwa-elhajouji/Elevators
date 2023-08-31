import InternalPanel from "./InternalPanel";
import "../styles/internalPanels.css"
const InternalPanels = () => {
  return (
    <div className="internalPanels">
      <div className="panel-container">
        <InternalPanel
          floors={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]}
          title={"Ascenseur1"}
        />
      </div>
      <div>
        <InternalPanel
          // floors={[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          floors={[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]}
          allowedFloors={[-5, -4, -3, -2, -1, 0, 2, 4, 6, 8, 9]}
          title={"Ascenseur2"}
        />
      </div>
    </div>
  )
}
export default InternalPanels
