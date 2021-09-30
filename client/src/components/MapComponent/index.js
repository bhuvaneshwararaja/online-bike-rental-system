
import {useState} from "react"
import { MapContainer, TileLayer, Marker, Tooltip, useMapEvents,Popup} from "react-leaflet";

export function LocationMarker() {
   

    const [position,setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e){
            console.log(e)
            setPosition(e.latlng)
            map.flyTo(e.latlng,map.getZoom())
        },
    })

    return position === null ? null :(
        <Marker position={position}>
            <Popup>Your current Location</Popup>
        </Marker>
    )
}

const MapComponent = () => {
   
    return <>
    <div className="">
    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='<a href="http://osm.org/copyright"></a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    <LocationMarker />
  </MapContainer>
    </div>
    </>
}

export default MapComponent;