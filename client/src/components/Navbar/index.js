import {useState} from "react"
import "./style.css"
const NavBar = () => {
    return <>
       <nav className="flex justify-between items-center nav--bar">
          <a href="/" className="logo--wrapper flex items-center">
          <img src="./assest/images/bike-logo.png" alt=""></img>
          </a>
          <ul class="flex nav--links">
           <li className="px-4 py-2 link">
             <a href="#">Home</a>
           </li>
           <li className="px-4 py-2 link">
             <a href="#">TakeBike</a>
    
           </li>
           <li className="px-4 py-2 link">
             <a href="#">PostBike</a>
            

           </li>
           <li className="px-4 py-2 link">
             <a href="#">About</a>
            

           </li>
           <li className="px-4 py-2 link ">
             <a href="#" className="logout">Logout</a>
            

           </li>
            
          </ul>
       </nav>
    </>
}

export default NavBar;