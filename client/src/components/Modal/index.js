import "./style.css"
const Modal = (props) => {
    return <>
        <div className="modal--wrapper" style={{left: '15%',
    top: `${props.topval}`}}>
            <div>
                <button type="button" className="close"></button>
            </div>
            <div className="modal--description">
                <div>
                    <img src="./assest/images/royalenfield.jpg" alt=""></img>
                </div>
                <div>
                    <table>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}

export default Modal;