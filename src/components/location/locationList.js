import React, { useContext, useEffect } from "react"
import { locationContext } from "./locationProvider"

export const locationList = () => {
    const { locations, getLocations } = useContext(locationContext)
    
    useEffect(() => {
        console.log("locationList: useEffect - getLocations")
        getLocations()
    }, [])

    return (
        <div className="locations">
            {console.log("locationList: Render", locations)}
            {
                locations.map(location => {
                    return <locationCard key={location.id} location={location} />
                })
            }
        </div>
    )
}