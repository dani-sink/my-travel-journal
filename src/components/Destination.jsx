export default function Destination(props) {
    return (
        <div className="dest-box">
            <div className="dest-container">
                <img src={props.item.imageUrl} alt="Arc de Triomphe" className="dest-img" />
                <div className="dest-description">
                    <div className="first-line">
                        <img src="/src/images/loca-logo1.jpg" alt={props.item.title} id="loc-logo"/>
                        <p>{props.item.location}</p>
                        <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.item.title}</h1>
                    <h3>{props.item.startDate} - {props.item.endDate}</h3>
                    <p className="text-description">{props.item.description}</p>
                </div>
            </div>
        {props.item.title != 'Blue Lagoon' && <hr />}
        </div>
    )
}