
import {useState} from "react"
import { MapContainer, TileLayer, Marker, LayerGroup,Circle, useMapEvents,Popup} from "react-leaflet";
import {useBetween} from "use-between"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from "leaflet"
const ShareAddress = () => {
  const [address,setUseraddress] = useState()
  return{
    address,setUseraddress
  }
}
const useSharedAddressState = () => useBetween(ShareAddress)
export function LocationMarker() {

   const {address,setUseraddress} = useSharedAddressState()

    const [position,setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e){
            fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.2a3e1f2f2006da3635308c25d2ea7215&lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`)
  .then(response => response.json())
  .then(data => {setUseraddress(data)

    });
           
            setPosition([e.latlng,{lat: 13.086668115556542, lng: 80.27066230773927},{lat: 13.089803153822029, lng: 80.2749538421631},{lat: 13.078433225134622, lng: 80.27611255645753}])
          
    map.flyTo(e.latlng,map.getZoom())
    if(position !== undefined){
      L.Routing.control({
        waypoints: [L.latLng(e.latlng.lat, e.latlng.lng), L.latLng(13.086668115556542, 80.27066230773927)],
        lineOptions: {
          styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: true,
        addWaypoints: true,
        routeWhileDragging: true,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: false
      }).addTo(map);
    }

        },
    })
    map.on('click',function(e){
     if(position !== null) console.log(e.latlng)
    })

    return position === null ? null :(
        <>
        {position.map((pos,index) => {
          return <Marker position={[pos.lat,pos.lng]}>
          <Popup>Your current Location</Popup>
      </Marker>
        })}
        
        {/* {test !== null ? test.forEach((s,index) => {
        // {console.log(index)}
            <Marker position={[position.lat,position.lng]}>
            <Popup>Your current Location</Popup>
        </Marker>
        }):""} */}
        <LayerGroup>
        <Circle
          center={[position[0].lat,position[0].lng]}
          pathOptions={{ color: 'green', fillColor: 'green' }}
          radius={3000}
        />
        
      </LayerGroup>
      </>
    )
}

const MapComponent = (props) => {
  console.log(props)
  const {address,setUseraddress} = useSharedAddressState()
  let getAddress = address !== undefined ? 
  props.setaddress(address.display_name)
    :""
    return <>
    <div className="">
    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={15}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='<a href="http://osm.org/copyright"></a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     
    <LocationMarker setuseraddress={setUseraddress}/>
  </MapContainer>
    </div>
    </>
}

export default MapComponent;