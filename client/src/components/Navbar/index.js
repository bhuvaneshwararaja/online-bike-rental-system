import {useState} from "react"
import "./style.css"
const NavBar = () => {
    return <>
       <nav className="flex justify-between">
          <a href="#" >Logo</a>
          <ul class="flex">
            <li class="px-4 py-1 text-xl">
              <a href="#">
                Home
              </a>
            </li>
            <li class="px-4 py-1 text-xl">
              <a href="#">
                About
              </a>
            </li>
            <li class="px-4 py-1 text-xl">
              <a href="#">
                Sign-In/Register
              </a>
            </li>
          </ul>
       </nav>
    </>
}

export default NavBar;