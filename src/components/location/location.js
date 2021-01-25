import React from "react"
import "./Location.css"

export const LocationCard = (props) => (
    <section classname="location">
        <h3 className="location__address">{props.location.address}</h3>
        <div className="location__footage">{props.location.square_footage}</div>
        <div className="location__handicap">{props.location.handicap_accessible}</div>
    </section>
) 