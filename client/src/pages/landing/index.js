import "./style.css"
import {useState} from "react"
import { BsChevronDoubleDown } from "react-icons/bs";
import MapComponent from "../../components/MapComponent";
import UserForm from "../../components/UserForm";
import island from "./Road sign-pana.svg"
const Landing = () => {
    const [toogleReg,setToogleReg] = useState("firstname")
    console.log(toogleReg)
    return <>
       <div>
           <div className="landing--text flex flex-col justify-center items-center height-100">
               <h1>Welcome to <span className="highlight"> Bike For All</span></h1>
               <p>Meet Your Bikes When You Need</p>
               <img src="./assest/images/landing.png" alt="landing img" />
               <BsChevronDoubleDown className="text-5xl cursor-pointer down"/>
           </div>
           <div className="landing--text height-100 ">
                <h1 className="text-center">For Whome this APP made ?</h1>
                <div className="flex items-center question">
                    <div>
                        <h3>Do you want to earn Money ?</h3>
                        <p className="w-3/4">Hey man ,You are in a right place why are you waiting go and <a href="/" className="highlight">Register</a> , Rent your bike and Earn money</p>
                    </div>
                    <img src="./assest/images/Coins-bro.png" alt="earning"></img>
                </div>
                <div className="flex items-center flex-row-reverse question">
                    <div className="flex flex-col items-end">
                        <h3 >Are you looking for a bike near you ?</h3>
                        <p className="w-3/4">Hey man , <a href="/" className="highlight">Register</a> and check our Renter near you . He already post his bike Why are you waiting ?</p>
                    </div>
                    <img src="./assest/images/getbike.png" alt="earning"></img>
                </div>
           </div>
           <div className="height-100 w-full landing--text flex flex-col items-center justify-center">
               <h1>Register</h1>
            <UserForm/>
            {/* <img src="./assest/images/Empty-street-pana.png" style={{"width": "100%","height": "90vh"}}></img> */}
            
           </div>
          
        </div>
       {/* <MapComponent /> */}
    </>
}

export default Landing;