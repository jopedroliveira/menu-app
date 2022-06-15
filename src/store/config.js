import { createStore, combineReducers } from "redux";
import mealsReducer from "./reducers/meals";
import filtersReducer from "./reducers/filters";


const configStore = () => {
    const store = createStore(
        combineReducers({
            meals: mealsReducer,
            filters: filtersReducer
        })
    )

    return store;
};

export default configStore;
