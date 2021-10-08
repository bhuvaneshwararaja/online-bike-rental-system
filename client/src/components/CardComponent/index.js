import "./style.css"

const CardComponent = () => {
    return <>
        <div className="card mt-4 mb-4 mx-2">
            <div className="card--img--wrapper">
                <img src="./assest/images/royalenfield.png" ></img>
            </div>
            <div className="card--content--wrapper">
                <h1>Royal Enfiled classic 350</h1>
                <div>
                    <p>Bike No:TN76AH1255</p>
                    <p>OwnerName:Ishaq</p>
                    <p>Contact:7686534278</p>
                </div>
            </div>
        </div>
    </>
}

export default CardComponent;
