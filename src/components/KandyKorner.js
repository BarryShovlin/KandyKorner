import React, { useState, createContext } from "react"

export const locationContext = createContext()

export const locationProvider = (props) => {
    const [locations, setLocations] = useState([])


const getLocations = () => {
    return fetch("http://localhost:8088/locations")
    .then(res => res.json())
    .then(setLocations)
}

const addLocation = locationObj => {
    return fetch("http://localhost:8088/locations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
    })
    .then(getLocations)
}
return (
    <locationContext.Provider value={{
        locations, getLocations, addLocations
    }}>
        {props.children}
    </locationContext.Provider>
    )
}