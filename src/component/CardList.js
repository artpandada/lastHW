import {getDishesItemAll} from "../services";
import {useEffect, useState} from "react";
import icon from '../assets/icons/plus-icon.svg'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addCount, addDishesDelivery, addPrice} from "../features/modal/modalSlice";


function CardList() {
    const [cardItems, setCardItems] = useState([]);
    const [filterCards, setFilterCards] = useState([]);
    let {filter} = useParams();
    const space = useSelector((state) => state.filter.spice);
    const nuts = useSelector((state) => state.filter.nuts);
    const vegetarian = useSelector((state)=> state.filter.vegetarian);
    const dispatch = useDispatch();

    useEffect(() => {
        setFilterCards(addFilterCards());
        console.log(filterCards)
    }, [space, nuts, vegetarian])



   const addFilterCards = ( )=> {
        let newArr = [...cardItems];

        if (nuts === false){
            newArr = newArr.filter((item) => item.nuts === false);
        }

        if(vegetarian === true){

            newArr = newArr.filter((item) => item.vegeterian === true);

        }

       return newArr.filter((item) => item.spiciness == space);

   }


    useEffect(() => {
        getDishesItemAll().then(arr => {
            setCardItems(arr)
            setFilterCards(arr);
        }
        );

    }, [])

    function importAllImg(r) {
        let images = {};
        r.keys().map((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    function renderItems(arr, filter) {
        if (filter) {
            arr = arr.filter((item) => item.category === filter)
        }


        const items = arr.map((item) => {

            const images = importAllImg(require.context('../assets/products/', false, /\.(png|jpe?g|svg)$/));
            const price = /\./g.test(item.price) ? `${item.price}0` : `${item.price}.00`;

            return (
                <div className="card"
                     key={item.id}>
                    <div className="card__top">
                        <img
                            src={images[item.image]}
                            className="card__image"
                            alt={item.name}
                        />
                        <span className="card__price">{`€${price}`}</span>
                    </div>
                    <div className="card__body">
                        <div className="card__title">{item.name}</div>
                        <button type="button"
                                className="card__button"
                                onClick = {()=> {
                                    dispatch(addCount());
                                    dispatch(addPrice(item.price));
                                    dispatch(addDishesDelivery(item));
                                }}
                        >
                            <img src={icon} alt="icon"/>
                        </button>
                    </div>
                </div>

            )
        })
        return (
            <div className="products-grid__inner">
                {items}
            </div>
        )
    }


    const itemList = renderItems(filterCards, filter)

    return (
        <div className="container">
            <div className="products-grid">
                {itemList}
            </div>
        </div>
    )
}

export default CardList;