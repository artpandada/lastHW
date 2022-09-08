import {useDispatch, useSelector} from 'react-redux'
import {modalChange} from "../features/modal/modalSlice";

function Header() {
    const dispatch = useDispatch()
    const modalIcon = useSelector((state)=> state.modal.modalIcon);
    let price = useSelector((state) => state.modal.modalIconPrice);
    const count = useSelector((state) => state.modal.modalIconCount);
    price = /\./g.test(price) ? `${price}0` : `${price}.00`;

    return(
        <header className="header container">
            <h1 className="heading logo">Bangkok Express</h1>
            <h3 className="subheading">Great food・Free delivery・Fair price</h3>

            <button type="button" className={`cart-icon ${modalIcon ? 'cart-icon_visible' : null}`} onClick={()=> dispatch(modalChange())}>
                <div className="cart-icon__inner">
                    <span className="cart-icon__count">{count}</span>
                    <span className="cart-icon__price">{`€${price}`}</span>
                </div>
            </button>
        </header>
    )
}
export default Header;