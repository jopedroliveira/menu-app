import React from 'react';
import { connect } from 'react-redux';
import RecipeForm from '../components/RecipeForm';
import { useParams } from 'react-router-dom';
import { startEditRecipe } from '../store/actions/recipes';
import NotFound from './NotFound';


const EditRecipe = (props) => {
	
	const { id } = useParams();	
	const recipe = props.recipes.find((recipe) => recipe.id === id);
	
	const handleSubmit = (recipe) => {
		props.dispatch(startEditRecipe(id, recipe));
	}

	return ( recipe ? 
		 <div className='main'>
      <div className='container'>
				<h1>{recipe.title}</h1>
				<RecipeForm recipe={recipe} onSubmit={handleSubmit} />
			</div>
		</div>
		: <NotFound /> // Not sure if this is correct
	)
}

// ?? Should this be achived this way? 
const MapStateToProps = (state) => {	
	return {
		recipes: state.recipes
	}
}

const ConnectedEditRecipe = connect(MapStateToProps)(EditRecipe);
export default ConnectedEditRecipe

