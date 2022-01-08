import { Link } from "react-router-dom"
import './Home.css'

const Home = () => {
    return (
        <>
        <h1>POKE-MEMORY</h1> 
        <div className="mode-list">
            <span className="mode-title"> select difficulty: </span>
            <Link className="mode-item" to="/game/easy"> Easy </Link>
            <Link className="mode-item" to="/game/medium"> Medium </Link>
            <Link className="mode-item" to="/game/hard"> Hard </Link>
        </div>
        </>
    )
}

export default Home
