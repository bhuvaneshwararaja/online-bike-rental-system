import MapComponent from "../../components/MapComponent";
import NavBar from "../../components/Navbar";
import CardComponent from "../../components/CardComponent/"
import { useEffect, useState } from "react";
import "./style.css"
import Modal from "../../components/Modal";
const BikeRentalHome = () => {
   const [getAddress,setAddress] = useState()
   useEffect(() => {
    fetch("/bike").then((res) => {return res.json()})
    .then((res) => {
      console.log(res)
      })
   },[])
   console.log(getAddress)
   const [topVal,setTopVal] = useState("-100%")
   const [overlay,setOverlay] = useState("none")
    return <>
        <NavBar/>
      {/* <Modal topval={topVal} /> */}
        <div className="flex height-100">
        <div className="w-1/2">
        <MapComponent setaddress={setAddress}/>

        </div>
        <div className="w-1/2">
        <div className="loc--section flex flex-col justify-center items-center">
            <input type="text" className="address--inp" value={getAddress !== undefined ? getAddress:""} placeholder="current location"></input>
            <input type="text" className="address--inp"  placeholder="Destination"></input>
        </div>
        <div className="cards--section">
            <div>


            {getAddress !== undefined ? <div className="scroll flex flex-col" style={{"width": "inherit","height": "100vh","overflowY":"auto"}}>
                <CardComponent settopval={setTopVal} setoverlay={setOverlay}/>
                <CardComponent settopval={setTopVal}/>
                <CardComponent settopval={setTopVal}/>

                <CardComponent settopval={setTopVal}/>
                <CardComponent settopval={setTopVal}/>
                <CardComponent settopval={setTopVal}/>



            </div>:<div className="flex flex-col items-center justify-center" style={{"minHeight":"70vh"}}>
            <h3 className="text-2xl">Click on the map to get your Bike</h3>
            <img src="./assest/images/nolocation.png" className="nolocation"></img>
            </div> }
           
            </div>
        </div>
        </div>
       

        </div>
        <div className="append-overlay" style={{display:`${overlay}`}}></div>
       
    </>
}

export default BikeRentalHome;