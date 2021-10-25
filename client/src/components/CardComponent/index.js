import "./style.css"
import { FaMapMarkerAlt } from "react-icons/fa";

const CardComponent = (props) => {
    return <>
        <div className="card mt-4 mb-4 mx-2 flex justify-between">
            
            <div className="w-1/2 relative overlay--helper">
            <div className="card--img--wrapper" >
            <img src="./assest/images/royalenfield.jpg"></img>
            </div>
            <div className="absolute img--overlay flex flex-col justify-center items-center">
                <h1 className="text-white text-2xl">RS.300/hr</h1>
                <button className="btn--c" onClick={(e) => {
                    e.preventDefault();
                    props.settopval("10%")
                    props.setoverlay("block")
                }}>Enquire</button>
                <button className="btn--c">Route</button>
            </div>
            </div>
            <div className="card--content--wrapper">
                <h1 className="uppercase">Royal Enfiled classic 350</h1>
                <p className="flex items-center text-gray-500"><FaMapMarkerAlt className="mr-1"/> mepco schlenk , mathiyasennai </p>
                <div>
                    <table>
                        <tr>
                            <td className="pd-p5 bld uppercase">OwnerName:</td>
                            <td  className="pd-p5">Ishaq</td>
                        </tr>
                        <tr>
                            <td  className="pd-p5 bld uppercase">BikeNo:</td>
                            <td  className="pd-p5">TN123ED</td>
                        </tr>
                        <tr>
                            <td  className="pd-p5 bld uppercase">BikeName:</td>
                            <td  className="pd-p5">Royal Enfield</td>
                        </tr>
                    </table>
                   

                </div>
                
            </div>
            
        </div>
    </>
}

export default CardComponent;
