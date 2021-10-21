import "./style.css"
import {useState} from "react"
import {  checkpass,
    checkusername,
    checkpassword,
    checkmail,
    checkmobile} from "../../Helper/validate"
const UserForm = () => {
    const error = {
        nameError:"",
        mailError:"",
        passwordError:"",
        mismatch:"",
        mobileError:""
    }
    const [authError,setauthError] = useState(error)
    console.log(authError)
    const regUser = {
        firstName:"",
        email:"",
        password:"",
        mobileNo:""
        
    }
    const existingUser = {
        email:"",
        password:""
    }
    const [flip,setFlip] = useState(0)
    const [newUser,setNewUser] = useState(regUser)
    const [user,setExistingUser] = useState(existingUser)

    function HandleLoginSubmit(e){
        e.preventDefault()
        fetch("/user/signin/",{
          method: 'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({loginCredential:user})
      }).then((res) => {return res.json()})
      .then((res) => {
        console.log(res)
        })
    }
    function Login(e){
        const {name,value} = e.target
        setExistingUser({
            ...user,
            [name]:value
        })
        console.log(user)
    }
    function saveState(name,value){
        setNewUser({
            ...newUser,
            [name]:value
        })
        console.log(newUser)
    }
    function Registration(e){
        const {name,value} = e.target
        if(e.target.name === "firstName"){
           let check = checkusername(e.target.value);
           if(check === true){
               setauthError(error)
               saveState(name,value)
           }
           else{
               setauthError({...error,nameError: check})
               console.log(authError)
           }

        }
        else if(e.target.name === "email"){
            let check = checkmail(e.target.value);
            if(check === true){
                setauthError(error)
                saveState(name,value)
            }
            else{
                setauthError({...error,mailError: check})
                console.log(authError)
            }
 
         }
         else if(e.target.name === "password"){
            let check = checkpassword(e.target.value);
            if(check === true){
                setauthError(error)
                saveState(name,value)
            }
            else{
                setauthError({...error,passwordError: check})
                console.log(authError)
            }
 
         }
         else if(e.target.name === "confirmPassword"){
            let check = checkpass(e.target.value,newUser.password);
            if(check === true){
                setauthError(error)
            }
            else{
                setauthError({...error,mismatch: check})
                console.log(authError)
            }
 
         }
         else if(e.target.name === "mobileNo"){
            let check = checkmobile(e.target.value);
            if(check === true){
                setauthError(error)
                saveState(name,value)
            }
            else{
                setauthError({...error,mobileError: check})
                console.log(authError)
            }
 
         }
     
    }

    function HandleUserSubmit(e){
        e.preventDefault()
    fetch("/user/signup/",{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({newUser:newUser})
  }).then((res) => {return res.json()})
  .then((res) => {
    console.log(res)
    })
}
    return <>
    
    <div className="user-card">
                <div className="user-card-inner" style={{"transform": `rotateY(${flip}deg)`}}>
                <div className="register flex flex-col  items-center">
                <div className="flex ">
    <button className="text-xl py-2 px-4 m-3 border-b-2 border-yellow-700 pointer-events-none t--btn">Sign up</button>
    <button className="text-xl py-2 px-4 m-3  t--btn" onClick={(e) => {
        e.preventDefault() 
        setFlip(180)
    }}>Login</button>

    </div>
                    <form>
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td><label>First Name</label></td>
                                    <td className="flex flex-col"><input type="text" className="form--inp" name="firstName" onChange={Registration}></input>
                                    <p style={{color:"crimson","width":"100%"}}>{authError.nameError !== "" ? authError.nameError : ""}</p>
                                    </td>

                                </tr>
                                <tr>
                                    <td><label>Email</label></td>
                                    <td className="flex flex-col"><input type="email" className="form--inp" name="email" onChange={Registration}></input>
                                    <p style={{color:"crimson","width":"100%"}}>{authError.mailError !== "" ? authError.mailError : ""}</p>
                                    
                                    </td>

                                </tr>
                                <tr>
                                    <td><label>Password</label></td>
                                    <td className="flex flex-col"><input type="password" className="form--inp" name="password" onChange={Registration}></input>
                                    <p style={{color:"crimson","width":"100%"}}>{authError.passwordError !== "" ? authError.passwordError : ""}</p>
                                    
                                    </td>

                                </tr>
                                <tr>
                                    <td><label>Confirm-Password</label></td>
                                    <td className="flex flex-col"><input type="password" className="form--inp" name="confirmPassword" onChange={Registration}></input>
                                    <p style={{color:"crimson","width":"100%"}}>{authError.mismatch !== "" ? authError.mismatch : ""}</p>
                                    
                                    </td>

                                </tr>
                                <tr>
                                    <td><label>Mobile-No</label></td>
                                    <td className="flex flex-col"><input type="text" className="form--inp" name="mobileNo" onChange={Registration}></input>
                                    <p style={{color:"crimson","width":"100%"}}>{authError.mobileError !== "" ? authError.mobileError : ""}</p>
                                    
                                    </td>

                                </tr>
                                </tbody>
                        </table>
                        <div className="text-center">
                            <button className="btn--c" onClick={HandleUserSubmit}>Register</button>
                        </div>
                    </form>
                    

</div>
<div className="login flex flex-col justify-center items-center">
    <div className="flex ">
    <button className="text-2xl py-2 px-4 m-3 t--btn" onClick={(e) => {
        e.preventDefault() 
        setFlip(0)
    }}>Sign up</button>
    <button className="text-2xl py-2 px-4 m-3 t--btn  border-b-2 border-yellow-700 pointer-events-none">Login</button>

    </div>
<form>
                        <table className="w-full">
                            <tbody>
                               
                                <tr>
                                    <td><label>Email</label></td>
                                    <td><input type="email" className="form--inp" name="email" onChange={Login}></input></td>

                                </tr>
                                <tr>
                                    <td><label>Password</label></td>
                                    <td><input type="password" className="form--inp" name="password" onChange={Login}></input></td>

                                </tr>
                                
                                </tbody>
                        </table>
                        <div className="text-center">
                            <button className="btn--c" onClick={HandleLoginSubmit}>Login</button>
                        </div>
                    </form>
</div>
                </div>
                </div>
    </>

}

export default UserForm;