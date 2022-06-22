import uuid from 'uuid';
import moment from 'moment';

const recipesReducerDefaultState = [{id: '4bf4f0c3-6659-4d17-9812-d4a1835aa1b5', createdAt: moment(), title:'batata', notes:''}]

const recipesReducer = (state = recipesReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_RECIPE':
			return [
				...state,
				action.recipe
			];
		case 'REMOVE_RECIPE':
			return state.filter(({id}) => id !== action.id);
		case 'EDIT_RECIPE':
			console.log(action.id);
			console.log(action.updates);
			return state.map((recipe) => {
				if (recipe.id === action.id) {
						return {
								...recipe,
								...action.updates
						};
				} else {
						return recipe
				};
		});
		default:
			return state
	}
};

export default recipesReducer;

