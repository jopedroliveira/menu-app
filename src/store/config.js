import { createStore, combineReducers, applyMiddleware } from "redux";
import mealsReducer from "./reducers/meals";
import filtersReducer from "./reducers/filters";
import recipesReducer from "./reducers/recipes";
import thunk from 'redux-thunk';


const configStore = () => {
  const store = createStore(
    combineReducers({
      meals: mealsReducer,
      filters: filtersReducer,
      recipes: recipesReducer
    }),
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION __ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

export default configStore;
