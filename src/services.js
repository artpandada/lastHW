import {baseUrl} from "./constants";



export function getDishesItemAll () {
    return fetch(`${baseUrl}/dishes`).then(res => res.json())
}
export function getDishesCarousel () {
    return fetch(`${baseUrl}/dishesForCarousel`).then(res => res.json())
}