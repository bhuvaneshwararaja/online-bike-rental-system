import "./style.css"
import "./control.js"
import { useState } from "react";

const Accordian = () => {
const [acc,setAcc] = useState([1,0,0])
console.log(acc)
    return <>
    <button className="accordion" onClick={() =>{
        setAcc([1,0,0])
    }}>How can i pay to a Renter ?</button>
{acc[0] === 1?<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>:""}

<button className="accordion" onClick={() =>{
        setAcc([0,1,0])
    }}>How can i find the bikes near me ?</button>
{acc[1] === 1?<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>:""}

<button className="accordion" onClick={() =>{
        setAcc([0,0,1])
    }}>What document should i provide to tak a bike ?</button>
{acc[2] === 1?<div className="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>:""}
    </>
}

export default Accordian;