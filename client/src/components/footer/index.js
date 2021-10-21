import "./style.css"
import { FaAngleRight,FaMapMarkerAlt,FaMobile,FaTelegramPlane,FaTwitter,FaFacebookF,FaInstagram } from "react-icons/fa";
const Footer = () => {
    return <>
    <footer className="flex">
       <div className="flex items-center justify-around" style={{"width": "70%","margin":"auto"}}>
   <ul className="footer--links">
   <h1 className="text-3xl  mx-5 my-5 lg">BikeForAll</h1>
   <li className={`px-4 py-2 links flex items-center  text-2xl`}>
     Get your unlimited Ride
   </li>
    <li className={`px-4 py-2  flex items-center  text-2xl`}>
    <a className="social--icons"><FaTwitter/></a>
    <a className="social--icons"><FaFacebookF/></a>

    <a className="social--icons"><FaInstagram/></a>

    </li>
   </ul>
        
        <ul className="footer--links">
          <h1 className="text-3xl  mx-5 my-5 text-white">Links</h1>
           <li className={`px-4 py-2 links flex items-center  text-2xl`}>
             <FaAngleRight/> 
             <a href="/">Home</a>
           </li>
           <li  className={`px-4 py-2 links flex items-center  text-2xl`}>
           <FaAngleRight/>

             <a href="/takeyourbike flex items-center">TakeBike</a>
    
           </li>
           <li  className={`px-4 py-2 links flex items-center  text-2xl`}>
           <FaAngleRight/>

             <a href="/">PostBike</a>
            

           </li>
           <li  className={`px-4 py-2 links flex items-center  text-2xl`}>
           <FaAngleRight/>

             <a href="/">About</a>
            

           </li>
           <li className="px-4 py-2 links flex items-center  text-2xl">
           <FaAngleRight/>

             <a href="/">Profile</a>
            

           </li>
            
          </ul>

          <ul className="footer--links ">
          <h1 className="text-3xl  mx-5 my-5 text-white">Contact US</h1>
           <li className={`px-4 py-2 links flex items-center  text-2xl`}>
             <FaMapMarkerAlt/> xyz street,sivakasi,628501
           </li>
           <li  className={`px-4 py-2 links flex items-center  text-2xl`}>
           <FaMobile/> +91 1234567898
    
           </li>
           <li  className={`px-4 py-2 links flex items-center  text-2xl`}>
           <FaTelegramPlane/> bikeforall@gmail.com
            

           </li>
          
            
          </ul>
            
       
       </div>
    </footer>
    </>
}

export default Footer;