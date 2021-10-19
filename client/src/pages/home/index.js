import MapComponent from "../../components/MapComponent";
import NavBar from "../../components/Navbar";
import CardComponent from "../../components/CardComponent/"
import { useEffect, useState } from "react";
import "./style.css"

const BikeRentalHome = () => {
   const [getAddress,setAddress] = useState()
   console.log(getAddress)
    return <>
        <NavBar/>
        <div className="flex">
        <div className="w-1/2 ">
        <div className="cards--section">
            <div>
            <input type="text" className="address--inp" value={getAddress !== undefined ? getAddress:""} placeholder="current location"></input>
            <input type="text" className="address--inp"  placeholder="Destination"></input>

            {getAddress !== undefined ? <div className="scroll" style={{"width": "inherit","height": "100vh","overflowY":"auto"}}>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>

                <CardComponent/>
                <CardComponent/>
                <CardComponent/>



            </div>:<div className="flex flex-col items-center justify-center" style={{"minHeight":"70vh"}}>
            <h3 className="text-2xl">Click on the map to get your Bike</h3>
            <img src="./assest/images/nolocation.png" className="nolocation"></img>
            </div> }
           
            </div>
        </div>
        </div>
        <div className="w-1/2">
        <MapComponent setaddress={setAddress}/>

        </div>

        </div>
       
    </>
}

export default BikeRentalHome;