import "./style.css"
import {useState} from "react"
const UserForm = () => {
    const [flip,setFlip] = useState(0)
    return <>
    
    <div className="user-card">
                <div className="user-card-inner" style={{"transform": `rotateY(${flip}deg)`}}>
                <div className="register flex flex-col justify-center items-center">
                <div className="flex ">
    <button className="text-2xl py-2 px-4 m-3 border-b-2 border-red-700 pointer-events-none">Sign up</button>
    <button className="text-2xl py-2 px-4 m-3  " onClick={(e) => {
        e.preventDefault() 
        setFlip(180)
    }}>Login</button>

    </div>
                    <form>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td><label>First Name</label></td>
                                    <td><input type="text" className="form--inp" ></input></td>

                                </tr>
                                <tr>
                                    <td><label>Email</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                <tr>
                                    <td><label>Password</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                <tr>
                                    <td><label>Confirm-Password</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                <tr>
                                    <td><label>Mobile-No</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                </tbody>
                        </table>
                        <div className="text-center">
                            <button className="btn--c">Register</button>
                        </div>
                    </form>
                    

</div>
<div className="login flex flex-col justify-center items-center">
    <div className="flex ">
    <button className="text-2xl py-2 px-4 m-3" onClick={(e) => {
        e.preventDefault() 
        setFlip(0)
    }}>Sign up</button>
    <button className="text-2xl py-2 px-4 m-3  border-b-2 border-red-700 pointer-events-none">Login</button>

    </div>
<form>
                        <table className="w-full">
                            <tbody>
                               
                                <tr>
                                    <td><label>Email</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                <tr>
                                    <td><label>Password</label></td>
                                    <td><input type="text" className="form--inp"></input></td>

                                </tr>
                                
                                </tbody>
                        </table>
                        <div className="text-center">
                            <button className="btn--c">Login</button>
                        </div>
                    </form>
</div>
                </div>
                </div>
    </>

}

export default UserForm;