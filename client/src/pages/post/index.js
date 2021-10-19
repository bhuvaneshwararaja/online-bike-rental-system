import NavBar from "../../components/Navbar"
import { useState } from "react";
import "./style.css"

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
    function getPostBike(e){
        const {name,value} = e.target
        setPostDetails({
            ...postDetails,
            [name]:value
        })

    }
    console.log(postDetails)

    return <>
        <NavBar/>
        <section>
            <div>

            </div>
            <div>
                <form>
                    <table>
                    <tr>
                           <td><label>Address</label></td>
                           <button onClick={(e) => {
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
                                     });
                                        
                                 }, (error) => {
                                //    this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
                                 })
                               }
                           }}>GetLocation</button>
                        </tr>
                        <tr>
                           <td><label>OwnerName</label></td>
                            <td><input type="text" className="form--inp" name="ownerName" onChange={getPostBike}></input></td>
                        </tr>
                       
                        <tr>
                        <td><label>Contact</label></td>
                            <td><input type="text" className="form--inp" name="contact" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                        <td><label>BikeName</label></td>
                            <td><input type="text" className="form--inp" name="bikeName" onChange={getPostBike}></input></td>
                            </tr>
                            <tr>
                            <td><label>BikeNumber</label></td>
                            <td><input type="text" className="form--inp" name="bikeNumber" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                        <td><label>BikeImage</label></td>
                            <td><input type="file" className="form--inp" name="bikeImage" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                        <td><label>Document(pdf)</label></td>
                            <td><input type="file" className="form--inp" name="bikeDoc" onChange={getPostBike}></input></td>
                        </tr>
                        <tr>
                            <button className="btn--c">Upload</button>
                        </tr>
                    </table>
                </form>
            </div>
        </section>
    </>
}

export default PostBike;