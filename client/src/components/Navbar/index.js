import {useState} from "react"
import "./style.css"
const NavBar = () => {
    return <>
       <nav className="flex justify-between items-center nav--bar">
          <a href="/" className="logo--wrapper flex items-center">
          <img src="./assest/images/bike-logo.png" alt=""></img>
          {/* <h1 className="mt-9">BikeForAll</h1> */}
          </a>
          <ul class="flex nav--links">
           <li className="px-4 py-2 ">
             <a href="#">Home</a>
           </li>
           <li className="px-4 py-2 ">
             <a href="#">SearchBikes</a>
    
           </li>
           <li className="px-4 py-2 ">
             <a href="#">SwitchRenter</a>
            

           </li>
           <li className="px-4 py-2 ">
             <a href="#">About</a>
            

           </li>
           <li className="px-4 py-2 ">
             <a href="#">Logout</a>
            

           </li>
            
          </ul>
       </nav>
    </>
}

export default NavBar;