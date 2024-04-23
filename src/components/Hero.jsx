import Destination from "./Destination"
import database from "../database"

export default function Hero() {
    const destinations = database.map(x =>  <Destination key={x.key} item={x.item} />)
    return (
        <div className="hero-container">
            {destinations}
        </div>
    )
}