import MapComponent from "../../components/MapComponent";
import NavBar from "../../components/Navbar";
import CardComponent from "../../components/CardComponent/"
import { useEffect, useState } from "react";

const BikeRentalHome = () => {
    // const [address,setAddress] = useState()
    // useEffect(() => {
    //     console.log(address)
    // },[address])
    return <>
        <NavBar/>
        <div>
            <MapComponent />
            <div>
                
            </div>
        </div>
        <div>
            <CardComponent/>
        </div>
    </>
}

export default BikeRentalHome;