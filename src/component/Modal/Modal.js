import ModalHeader from "./ModalHeader";
import CardForm from "./CardForm";
import CardProduct from './CardProduct';


function Modal() {
    return (
        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__inner">
                <ModalHeader/>
                <div className="modal__body">
                    <div>
                        <CardProduct/>
                        <CardForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;