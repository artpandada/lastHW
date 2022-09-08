import Carousel from "../Carousel";
import FilterMenu from "../FilterMenu";
import FilterAddition from "../FilterAddition";
import CardList from "../CardList";


export function MainPage({t})  {
    console.log(t);
    return (
        <>
            <Carousel/>
            <FilterMenu/>
            <FilterAddition/>
            <CardList/>
        </>
    )
}