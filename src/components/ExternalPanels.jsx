import ExternalPanel from "./ExternalPanel"
import"../styles/externalPanels.css"
const ExternalPanels=()=>{
return(
    <div className='externalPanels'>
    <div>
    <ExternalPanel floors={[0,1,2,3,4,5,6,7,8,9]}  title={"Ascenseur1"} />

    </div>
      <div>
      <ExternalPanel floors={[-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]} allowedFloors={[-5,-4,-3,-2,-1,0,2,4,6,8,9]} title={"Ascenseur2"} />

      </div>
    </div>
)

}
export default ExternalPanels