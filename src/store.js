import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice'
import filterReducer from './features/filtersAddition/filtersAdditionSlice'
import vegetarianReducer from './features/filtersAddition/filtersAdditionSlice'


export default configureStore({
    reducer: {
        modal : modalReducer,
        filter: filterReducer,
        vegetarian : vegetarianReducer

    }
});