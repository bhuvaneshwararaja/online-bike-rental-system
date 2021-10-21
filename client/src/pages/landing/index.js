import "./style.css"

import UserForm from "../../components/UserForm";
import { Parallax, Background } from "react-parallax";
import NavBar from "../../components/Navbar"
import Fade from 'react-reveal/Fade';
import { FaMotorcycle,FaRupeeSign,FaRoute } from "react-icons/fa";
import { HiLocationMarker} from "react-icons/hi";
import Accordian from "../../components/Accordian";
import Footer from "../../components/footer";
const Landing = () => {
  
       return<>
     <NavBar/>

     <div style={{"width":"100%","margin":"auto"}}>
     <Parallax bgImage={'./assest/images/about-us-1.jpg'} strength={500}>

     <div className="w-100 landing--text height-80 bg--login" style={{"backgroundPosition": "center",
    "backgroundSize": "cover"}}>
        <div className="w-100 landing--text height-80 flex items-center justify-center px-5 absolute transparent--bg">
        <div className="landing--text text-center">
              <Fade bottom>
              <h1>Welcome to <span>Bike For All</span></h1>
              
              </Fade>
             <Fade bottom>
             <p className="text-center">Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className="btn--c">Lets Go</button>

             </Fade>
          </div>
        </div>
        
        
         </div>
</Parallax>
         <div style={{"width": "100%","margin":"auto","background":"#ffa931"}} className="flex height-100  flex-row  items-center justify-around">
            
            <div className="w-1/2 ">
            <Fade bottom>
            <h1 className="htu">How to use ?</h1>
               </Fade>
             <div className="flex flex-wrap items-center justify-center">
               <Fade bottom>
               <div className="flex  app--use">
                    <FaMotorcycle className="icons"/>
                    <div className="content">
                   <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                   </div>
                </div>
               </Fade>
                <Fade bottom>
                <div className="flex app--use">
                    <HiLocationMarker className="icons"/>
                    <div className="content">
                   <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                   </div>
                </div>
                </Fade>
                <Fade bottom>
                <div className="flex app--use">
                    <FaRupeeSign className="icons"/>
                    <div className="content">
                   <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                   </div>
                </div>
                </Fade>
               
                <Fade bottom>
                <div className="flex app--use">
                    <FaRoute className="icons"/>
                    <div className="content">
                   <h3>Select your bike</h3>
                    <p>You can select your bike around you</p>
                   </div>
                </div>
                </Fade>
                
             </div>
            </div>
             <div className="w-1/2">
               <UserForm/>
             </div>
         </div>
         <Parallax bgImage={"./assest/images/bg.jpg"} strength={-100} className="transparent--bg">
      <div  >
      <div className="height-80 flex flex-col items-start justify-center transparent--bg " style={{"width": "100%","margin":"auto"}}>
           
           <div className="flex items-center justify-center" style={{"width": "50%","margin":"auto"}}>
              
              <div className="about--us">
              <Fade bottom>
              <h1 className="title text-white">Aboutus</h1>
              </Fade>
              <Fade bottom>

            <p className="text-white">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
               Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
               Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet

            </p>
            </Fade>


              </div>
              <div className="gps">
                <img src="./assest/images/gps.png"></img>
              </div>
            {/* <div className="collection">
               <div className="frame--wrapper">
               <div className="frame--img">
               <img src="./assest/images/about-us-1.jpg" alt=""></img>
               </div>
               </div>
               <div className="frame--wrapper">
               <div className="frame--img">
               <img src="./assest/images/about-us-1.jpg" alt=""></img>
               </div>
               </div>
               <div className="frame--wrapper">
               <div className="frame--img">
               <img src="./assest/images/about-us-1.jpg" alt=""></img>
               </div>
               </div>
            </div> */}
           </div>
        </div>
      </div>
    </Parallax>
    
         <div style={{"width": "70%","margin":"auto"}} className="height-100 flex flex-col items-center justify-center">
         <h1 className="title">FAQs</h1>

                <Accordian />
         </div>
 
            
           </div>
           <Footer/>
    </>
}

export default Landing;