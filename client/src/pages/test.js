import CardComponent from "../components/CardComponent"
import MapComponent from "../components/MapComponent"

const Test = () =>{
    return <>
        <MapComponent/>
        <div className="flex flex-wrap">
        {[1,2,3,4,5,6,7,8,9,0].map((s,index) => {
            return <CardComponent/>
        })}
        </div>
        
        {/* <CardComponent/> */}
    </>
}
export default Test;