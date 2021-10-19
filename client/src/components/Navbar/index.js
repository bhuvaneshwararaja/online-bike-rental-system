import {useState} from "react"
import "./style.css"
const NavBar = () => {
  let path = window.location.pathname
    return <>
       <nav className="flex justify-between items-center nav--bar">
          <a href="/" className="logo--wrapper flex items-center">
          <img src="./assest/images/bike-logo.png" alt=""></img>
          </a>
          <ul class="flex nav--links">
           <li className={`px-4 py-2 link ${path === "/" ? "active--link":""}`}>
             <a href="/">Home</a>
           </li>
           <li  className={`px-4 py-2 link ${path === "/takeyourbike" ? "active--link":""}`}>
             <a href="/takeyourbike">TakeBike</a>
    
           </li>
           <li  className={`px-4 py-2 link ${path === "/postbike" ? "active--link":""}`}>
             <a href="#">PostBike</a>
            

           </li>
           <li  className={`px-4 py-2 link ${path === "/about" ? "active--link":""}`}>
             <a href="#">About</a>
            

           </li>
           <li  className={`px-4 py-2 link ${path === "/profile" ? "active--link":""}`}>
             <a href="#">Profile</a>
            

           </li>
           <li className="px-4 py-2 link">
             <a href="#" className="logout">Logout</a>
            

           </li>
            
          </ul>
       </nav>
    </>
}

export default NavBar;