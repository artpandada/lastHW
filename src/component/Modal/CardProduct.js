import {useSelector} from "react-redux";
import iconMinus from '../../assets/icons/square-minus-icon.svg'
import iconPlus from '../../assets/icons/square-plus-icon.svg'
import {useState} from "react";


function CardProduct() {
    const dishesDelivery = useSelector((state) => state.modal.dishesDelivery);


    function importAllImg(r) {
        let images = {};
        r.keys().map((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    function renderItems (arr) {
        const arrFilter = arr.reduce((arr, el) => {
            const index = arr.findIndex(existingItem => existingItem.id === el.id);
            if(-1 === index){
                arr.push(el)
            } else {
                // arr[index].count++
            }

            return arr;
        },[])
        const items =  arrFilter.map(item => {
          const images = importAllImg(require.context('../../assets/products/', false, /\.(png)$/));
          const price = /\./g.test(item.price) ? `${item.price}0` : `${item.price}.00`;
          console.log(item, 'ite')
            return(
                <div className="cart-product"
                     key = {item.id}
                >
                    <div className="cart-product__img">
                        <img src={images[item.image]} alt={item.name}/>
                    </div>
                    <div className="cart-product__info">
                        <div className="cart-product__title">{item.name}</div>
                        <div className="cart-product__price-wrap">
                            <div className="cart-counter">
                                <button
                                    type="button"
                                    className="cart-counter__button cart-counter__button_minus"
                                >
                                    <img
                                        src={iconMinus}
                                        alt="minus"
                                    />
                                </button>
                                <span className="cart-counter__count">
                                    {item.count}
                                </span>
                                <button
                                    type="button"
                                    className="cart-counter__button cart-counter__button_plus"
                                >
                                    <img src={iconPlus} alt="plus"/>
                                </button>
                            </div>
                            <div className="cart-product__price">{`€${price}`}</div>
                        </div>
                    </div>
                </div>
            )
        })
        return items;
    }

    const items = renderItems(dishesDelivery);

    return (
        <>
            {items ? items : null}

        </>
    )
}
export default CardProduct;