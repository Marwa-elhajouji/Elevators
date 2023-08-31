import "../styles/home.css"
import ascenseur from "../assets/img/ascenseur.jpg"
const Home = () => {
  return (
    <div className="home">
      <div>Welcome !</div>
      <img src={ascenseur} alt="ascenseur" />
    </div>
  )
}
export default Home
