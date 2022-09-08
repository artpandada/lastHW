
import {useDispatch, useSelector} from "react-redux";
import {changeNuts, spaceChange, changeVegetarian} from "../features/filtersAddition/filtersAdditionSlice";

function FilterAddition() {
    const space =  useSelector((state) => state.filter.spice);
    const nuts = useSelector((state) => state.filter.nuts);
    const vegetarian = useSelector((state)=> state.filter.vegetarian)
    const dispatch = useDispatch();


    return (
        <div className="container">
            <div className="filters">
                <div className="filters__group">

                    <label className="filters__label">Max spiciness</label>
                    <div className="filters__slider">

                        <div className={`slider `}>
                            <input type='range' min='0' max='4' defaultValue={space} className="rangeFilter"
                                   onInput={(e) => {
                                       dispatch(spaceChange(e.target.value))
                                   }}/>
                            {/*<div className="slider__thumb"*/}
                            {/*     style={{'left':'75%'}}*/}
                            {/*     onMouseDown={(e) => {setCla('slider_dragging') }}*/}
                            {/*     onMouseUp = {()=> {setCla('')}}*/}
                            {/*>*/}
                            <span className="slider__value">
                                {space}
                            </span>
                            {/*</div>*/}
                            {/*<div className="slider__progress" style={{"width": "75%"}}></div>*/}

                            <div className="slider__steps">
                                <span></span><span></span><span></span
                            ><span className="slider__step-active"></span><span></span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="filters__group">
                    <div className="filters__checkbox">
                        <input
                            className="styled-checkbox"
                            id="nuts-checkbox"
                            type="checkbox"
                            value={nuts}
                            onChange={() => {dispatch(changeNuts())}}

                        />
                        <label htmlFor="nuts-checkbox">
                            <span className="filters__label">No nuts</span></label
                        >
                    </div>
                </div>
                <div className="filters__group">
                    <div className="filters__checkbox">
                        <input
                            className="styled-checkbox"
                            id="vegeterian-checkbox"
                            type="checkbox"
                            value={vegetarian}
                            onChange={()=> {dispatch(changeVegetarian())}}
                        />
                        <label htmlFor="vegeterian-checkbox">
                            <span className="filters__label">Vegeterian only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterAddition;