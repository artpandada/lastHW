import closeIcon from '../../assets/icons/cross-icon.svg'
import { useDispatch } from 'react-redux'
import {modalChange} from "../../features/modal/modalSlice";

function ModalHeader() {
    const dispatch = useDispatch()
    return (
        <div className="modal__header">
            <button type="button" className="modal__close" onClick={()=> dispatch(modalChange())}>
                <img src={closeIcon} alt="close-icon"/>
            </button>
            <h3 className="modal__title">Your order</h3>
        </div>
    )
}
export default ModalHeader;
