import React from 'react';
import RecipeForm from '../components/RecipeForm';
import { connect } from 'react-redux';
import { addRecipe } from '../store/actions/recipes';
import Recipe from '../components/Recipe';

const Recipes = (props) => {

  const handleSubmit = (recipe) => {
    props.dispatch(addRecipe(recipe));
  }

  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Recipes Database</h1>
            {props.recipes.map((rec) => {return <Recipe key={rec.id} recipe={rec} />})}
          </div>
          <div className='col col-lg-4'>
            <h2>Quick add recipe</h2>
            <RecipeForm onSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const ConnectedRecipes = connect(mapStateToProps)(Recipes);
export default ConnectedRecipes
