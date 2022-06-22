import { createStore, combineReducers } from "redux";
import mealsReducer from "./reducers/meals";
import filtersReducer from "./reducers/filters";
import recipesReducer from "./reducers/recipes";


const configStore = () => {
    const store = createStore(
        combineReducers({
            meals: mealsReducer,
            filters: filtersReducer,
            recipes: recipesReducer
        })
    )

    return store;
};

export default configStore;
