import "./style.css"
import {useState} from "react"
import { BsChevronDoubleDown } from "react-icons/bs";
import MapComponent from "../../components/MapComponent";
import UserForm from "../../components/UserForm";
import island from "./Road sign-pana.svg"
import NavBar from "../../components/Navbar"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const Landing = () => {
    // const [toogleReg,setToogleReg] = useState("firstname")
    // console.log(toogleReg)
    // return <>
    //    <div>
    //        <div className="landing--text flex flex-col mt-5 items-center height-100">
    //            <h1>Welcome to <span className="highlight"> Bike For All</span></h1>
    //            <p>Meet Your Bikes When You Need</p>
    //            <img src="./assest/images/landing.png" alt="landing img" />
    //            <BsChevronDoubleDown className="text-5xl cursor-pointer down"/>
    //        </div>
    //        <div className="landing--text height-100 ">
    //             <h1 className="text-center">For Whom this APP made ?</h1>
    //             <div className="flex items-center question">
    //                 <div>
    //                     <h3>Do you want to earn Money ?</h3>
    //                     <p className="w-3/4">Hey man ,You are in a right place why are you waiting go and <a href="/" className="highlight">Register</a> , Rent your bike and Earn money</p>
    //                 </div>
    //                 <img src="./assest/images/Coins-bro.png" alt="earning"></img>
    //             </div>
    //             <div className="flex items-center flex-row-reverse question">
    //                 <div className="flex flex-col items-end">
    //                     <h3 >Are you looking for a bike near you ?</h3>
    //                     <p className="w-3/4">Hey man , <a href="/" className="highlight">Register</a> and check our Renter near you . He already post his bike Why are you waiting ?</p>
    //                 </div>
    //                 <img src="./assest/images/getbike.png" alt="earning"></img>
    //             </div>
    //        </div>

    //        <div className="height-100 w-full landing--text flex flex-col items-center justify-center">
    //            <h1>Registeration</h1>
    //            <p className="mb-5">Register Earn Money or take a Bike near you</p>
    //         <UserForm/>
            {/* <img src="./assest/images/Empty-street-pana.png" style={{"width": "100%","height": "90vh"}}></img> */}
            
        //    </div>
          
        // </div>
       {/* <MapComponent /> */}
       return<>
     <div style={{"width":"90%","margin":"auto"}}>
     <NavBar/>
      <section className="flex w-full items-center " style={{"min-height": "100vh"}}>
          <div className="landing--text">
              <Fade left>
              <h1>Welcome to <span>Bike For All</span></h1>
              
              </Fade>
             <Fade bottom>
             <p>Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="btn--c">Lets Go</button>

             </Fade>
          </div>
          <div>
              <Fade right>
              <img src="./assest/images/pale-buy-a-motorcycle-on-the-internet.png" alt=""></img>

              </Fade>
          </div>
          
      </section>
      <div className="det--section height-100 ">
<Fade bottom>
<h1 className="text-center">For Whom this APP made ?</h1>
    
    </Fade>                 <div className="flex items-center question justify-around">
                     <Slide left>
                     <div>
                         <h3>Do you want to earn Money ?</h3>
                         <p className="w-3/4">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet<a href="/" className="highlight">Register</a> , Rent your bike and Earn money</p>
                     </div>
                     </Slide>
                     <Slide right>
                     <img src="./assest/images/Coins-bro.png" alt="earning"></img>

                     </Slide>
                 </div>
                 <div className="flex items-center flex-row-reverse question justify-around">
                     <Slide right>
                     <div className="flex flex-col items-end">
                         <h3 >Are you looking for a bike near you ?</h3>
                         <p className="w-3/4"> Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet <a href="/" className="highlight">Register</a> </p>
                     </div>
                     </Slide>
<Slide left>
<img src="./assest/images/getbike.png" alt="earning"></img>
    
    </Slide>                 </div>
            </div>
     </div>
      <div className="w-100 landing--text height-100 flex flex-col items-center bg--login" style={{"background":`url(./assest/images/bg.jpg)`,"    background-position": "center",
    "background-size": "cover"}}>
        <div className="w-100 landing--text height-100 absolute transparent--bg"></div>
         <div className="login--section  flex relative ">
         <div className="img--login--container flex items-center">
              <img src="./assest/images/login--img.png"></img>
              </div>
                <UserForm/>
         </div>
            
           </div>
    </>
}

export default Landing;