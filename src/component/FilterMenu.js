import icon from '../assets/icons/angle-icon.svg'

import {NavLink} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function SampleNextArrow(props) {
    const {onClick} = props;
    return (

        <div className="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"
             onClick={onClick}
        >
            <img src={icon} alt="icon"/>
        </div>
    )
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className={`ribbon__arrow ribbon__arrow_left  `}
             onClick={onClick}
        >
            <img src={icon} alt="icon"/>
        </div>
    )
}


function FilterMenu() {
    const settings = {
        infinite: false,
        slidesToShow:1,
        slidesToScroll: 4,

        variableWidth: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    }
    return (

           <div className="container">
               <h2 className="section-heading">Our Menu</h2>
               <div>
                   <div className="container">
                       <div className="ribbon">
                           <nav className="ribbon__inner">
                              <Slider {...settings}>
                                  <NavLink to='/' className="ribbon__item"  >All</NavLink>
                                  <NavLink to='/salads' className="ribbon__item" > Salads</NavLink>
                                  <NavLink to='/soups' className="ribbon__item">Soups</NavLink>
                                  <NavLink to='/chicken-dishes' className="ribbon__item">Chicken dishes</NavLink>
                                  <NavLink to='/beef-dishes' className="ribbon__item">Beef dishes</NavLink>
                                  <NavLink to='/seafood-dishes' className="ribbon__item">Seafood dishes</NavLink>
                                  <NavLink to='/vegetable-dishes'  className="ribbon__item">Vegetable dishes</NavLink>
                                  <NavLink to='/bits-and-bites' className="ribbon__item">Bits and bites</NavLink>
                                  <NavLink to='/on-the-side' className="ribbon__item">On the side</NavLink>
                              </Slider>
                           </nav>


                       </div>
                   </div>
               </div>
           </div>

    )
}


export default FilterMenu;

