import NavBar from "../../components/Navbar"
import { useState } from "react";
import "./style.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostBike = () => {
    const bikeDetails = {
        ownerName:"",
        address:{
            latitude:"",
            longitude:"",
            location:""
        },
        contact:"",
        bikeName:"",
        bikeNumber:"",
        bikeImage:"",
        bikeDoc:""

    }
    const [postDetails,setPostDetails] = useState(bikeDetails)
    const [imageUpload,setImageUpload] = useState(false)
    const [pdfUpload,setPdfUpload] = useState(false)
    const [getLocation,setLocation] = useState(false)

    function getPostBike(e){
        const {name,value} = e.target
        setPostDetails({
            ...postDetails,
            [name]:value
        })

    }
    console.log(postDetails)
    const uploadCloudinary = async (e) => {
        const files = e.target.files[0]
        console.log(files)

        let formData = new FormData();
        formData.append('file',files);
        formData.append('upload_preset','o2e0xoco')
        if(files.type.includes('image')){
           setImageUpload(true)
        }
        else{
           setPdfUpload(true)
        }
     await fetch("https://api.cloudinary.com/v1_1/da8ygcsci/image/upload",{
            method:"POST",
            body:formData
        }).then((res) => {return res.json()})
        .then((res) => {
            
            // console.log(files.type.contains('image'))
            console.log(res)
            if(files.type.includes('image')){
                setPostDetails({
                    ...postDetails,
                    bikeImage:res.secure_url,
                })
                setImageUpload(false)
            }
            else{
                setPostDetails({
                    ...postDetails,
                    bikeDoc:res.secure_url,
                })
                setPdfUpload(false)
            }
            console.log(postDetails)
           
           
        })
}
   
const success = () => toast("Your bike successfully posted");

    return <>
        <NavBar/>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
        <section>
            <div>

            </div>
            <div className="post--container">
                <form className="w-full flex flex-col justify-center items-center">
                    <table className="post--table">
                    <tr>
                           <td><label>Address</label></td>
                           {getLocation === false ? <button className="btn--c mx-5" style={{background:"none",color:"black"}} onClick={(e) => {
                               e.preventDefault();
                               const location = window.navigator && window.navigator.geolocation
    
                               if (location) {
                                 location.getCurrentPosition((position) => {
                                   
                                   fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.2a3e1f2f2006da3635308c25d2ea7215&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
                                   .then(response => response.json())
                                   .then(data => {setPostDetails({...bikeDetails,address:{
                                    latitude:position.coords.latitude,
                                    longitude:position.coords.longitude,
                                    location:data.display_name
                                }})
                                console.log(postDetails)
                                setLocation(data.display_name)
                                     });
                                        
                                 }, (error) => {
                                //    this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
                                 })
                               }
                           }}>GetLocation</button>:<td><input type="text" className="post--inp" name="ownerName" value={getLocation}></input></td>}
                        </tr>
                        <tr>
                           <td><label>OwnerName</label></td>
                            <td><input type="text" className="post--inp" name="ownerName" onChange={getPostBike}></input></td>
                        </tr>
                       
                        <tr>
                        <td><label>Contact</label></td>
                            <td><input type="text" className="post--inp" name="contact" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                        <td><label>BikeName</label></td>
                            <td><input type="text" className="post--inp" name="bikeName" onChange={getPostBike}></input></td>
                            </tr>
                            <tr>
                            <td><label>BikeNumber</label></td>
                            <td><input type="text" className="post--inp" name="bikeNumber" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                        <td><label>BikeImage</label></td>
                            <td><input type="file" className="post--inp" name="bikeImage" onChange={uploadCloudinary}></input> {imageUpload === true ? <span>Uploading...</span>:""}</td>
                        </tr>
                        <tr>
                        <td><label>Document(pdf)</label></td>
                            <td><input type="file" className="post--inp" name="bikeDoc" onChange={uploadCloudinary}></input>  {pdfUpload === true ? <span>Uploading...</span>:""}</td>
                        </tr>
                       
                    </table>
                    <div className="text-center">
                            <button className="btn--c" onClick={(e) => {
                                e.preventDefault();
                                fetch("/user/post/",{
                                    method: 'POST',
                                    headers:{'Content-Type':'application/json'},
                                    body: JSON.stringify({postBike:postDetails})
                                }).then((res) => {return res.json()})
                                .then((res) => {
                                    success()

                                  console.log(res)
                                  })
                            }}>Upload</button>
                        </div>
                </form>
            </div>
        </section>
    </>
}

export default PostBike;