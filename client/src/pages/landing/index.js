import "./style.css"
import {useState} from "react"
import { BsChevronDoubleDown } from "react-icons/bs";
import MapComponent from "../../components/MapComponent";
import UserForm from "../../components/UserForm";
import island from "./Road sign-pana.svg"
import NavBar from "../../components/Navbar"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FaMotorcycle,FaRupeeSign,FaRoute } from "react-icons/fa";
import { HiLocationMarker} from "react-icons/hi";
import Accordian from "../../components/Accordian";
const Landing = () => {
  
       return<>
     <NavBar/>

     <div style={{"width":"100%","margin":"auto"}}>
     <div className="w-100 landing--text height-80 flex items-center bg--login" style={{"background":`url(./assest/images/bg.jpg)`,"    background-position": "center",
    "background-size": "cover"}}>
        <div className="w-100 landing--text height-80 flex items-center px-5 absolute transparent--bg">
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
        <UserForm/>
        </div>
        
        
         </div>
         <div style={{"width": "70%","margin":"auto"}} className="height-100 flex flex-col items-center justify-center">
             <h1 className="title">How to use ?</h1>
             <div className="flex ">
                <div className="flex flex-col items-center app--use">
                    <FaMotorcycle className="icons"/>
                    <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                </div>
                <div className="flex flex-col items-center  app--use">
                    <FaRupeeSign className="icons"/>
                    <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                </div>
                <div className="flex flex-col items-center app--use">
                    <HiLocationMarker className="icons"/>
                    <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                </div>
                <div className="flex flex-col items-center app--use">
                    <FaRoute className="icons"/>
                    <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                </div>
             </div>
         </div>
         <div className="height-100 flex flex-col items-start justify-center" style={{"width": "50%","margin":"auto"}}>
           
            <div className="flex items-center justify-center" >
               <div className="about--us">
               <h1 className="title">Aboutus</h1>
             <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet

             </p>

               </div>
             <div className="collection">
                <div className="frame--wrapper">
                <div className="frame" style={{"background":`url(${'./assest/images/dotted.jpg'})`,"backgroundRepeat":"round"}}></div>
                <div className="frame--img">
                <img src="./assest/images/about-us-1.jpg" alt=""></img>
                </div>
                </div>
                <div className="frame--wrapper">
                <div className="frame" style={{"background":`url(${'./assest/images/dotted.jpg'})`,"backgroundRepeat":"round"}}></div>
                <div className="frame--img">
                <img src="./assest/images/about-us-1.jpg" alt=""></img>
                </div>
                </div>
                <div className="frame--wrapper">
                <div className="frame" style={{"background":`url(${'./assest/images/dotted.jpg'})`,"backgroundRepeat":"round"}}></div>
                <div className="frame--img">
                <img src="./assest/images/about-us-1.jpg" alt=""></img>
                </div>
                </div>
             </div>
            </div>
         </div>
         <div style={{"width": "70%","margin":"auto"}} className="height-100 flex flex-col items-center justify-center">
         <h1 className="title">FAQs</h1>

                <Accordian />
         </div>
      {/* <section className="flex w-full items-center " style={{"min-height": "100vh"}}>
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
         </div> */}
            
           </div>
    </>
}

export default Landing;