import {useState} from "react"
import "./style.css"
const NavBar = () => {
    return <>
       <nav className="flex justify-between items-center">
          <a href="/" className="logo--wrapper flex items-center">
          <img src="./assest/images/bike-logo.png" alt=""></img>
          <h1 className="mt-9">BikeForAll</h1>
          </a>
          <ul class="flex">
           
            <li class="px-4 py-1 text-xl">
              <a href="/" className="btn--c">
                Sign-In/Register
              </a>
            </li>
          </ul>
       </nav>
    </>
}

export default NavBar;