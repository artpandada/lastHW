import Slider from "react-slick";
import {useEffect, useState} from "react";
import {getDishesCarousel} from "../services";
import {useDispatch} from "react-redux";
import {addPrice,addCount,addDishesDelivery} from "../features/modal/modalSlice";


import angleIcon from '../assets/icons/angle-icon.svg'
import angleLeft from '../assets/icons/angle-left-icon.svg'
import plusIcon from '../assets/icons/plus-icon.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SampleNextArrow(props) {
    const {onClick} = props;
    return (

        <div className="carousel__arrow carousel__arrow_right"
             onClick={onClick}>
            <img src={angleIcon} alt="icon"/>
        </div>
    )
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="carousel__arrow carousel__arrow_left"
             onClick={onClick}>
            <img src={angleLeft} alt="icon"/>
        </div>
    )
}


function Carousel() {

    const [itemsList, setItemsList] = useState([])
    const dispatch = useDispatch();

    function loaderItems() {
        getDishesCarousel().then(res => setItemsList(res));
    }
    useEffect(() => {
        loaderItems()
    }, [])


    function importAllImg(r) {
        let images = {};
        r.keys().map((item) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }


    function renderItems(arr) {
        const items = arr.map(item => {
            const images = importAllImg(require.context('../assets/carousel/', false, /\.(png)$/));
            const price = /\./g.test(item.price) ? `${item.price}0` : `${item.price}.00`;

            return (
                <div className="carousel__slide"
                     key={item.id}
                >
                    <img
                        src={images[item.image]}
                        className="carousel__img"
                        alt={item.name}
                    />
                    <div className="carousel__caption">
                        <span className="carousel__price">{`€${price}`}</span>
                        <div className="carousel__title">{item.name}</div>
                        <button type="button" className="carousel__button"
                                onClick = {()=> {
                                    dispatch(addCount());
                                    dispatch(addPrice(item.price));
                                    dispatch(addDishesDelivery(item));
                                }}>
                            <img src={plusIcon} alt="icon"/>

                        </button>
                    </div>
                </div>
            )
        })
        return items;
    }


    const items = renderItems(itemsList);
    const settings = {
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    }


    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel__inner">
                    <Slider {...settings}>
                        {items}
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default Carousel