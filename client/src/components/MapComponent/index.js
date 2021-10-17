
import {useState,useEffect} from "react"
import { MapContainer, TileLayer, Marker, Tooltip,MapConsumer,LayerGroup,Circle, useMapEvents,Popup} from "react-leaflet";
import {useBetween} from "use-between"
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
           
            setPosition(e.latlng)
            map.flyTo(e.latlng,map.getZoom())

        },
    })
    map.on('click',function(e){
      if(position !== null) console.log(e.latlng.lat-position.lat)
    })

    return position === null ? null :(
        <>
        <Marker position={position}>
            <Popup>Your current Location</Popup>
        </Marker>
        <LayerGroup>
        <Circle
          center={position}
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
// console.log(test)
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