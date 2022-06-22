 import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';

const Recipe = ({recipe}) => {
	return (
		<div className='recipes__row'>
			<div>
				<h3 className="text text__title">{recipe.title}</h3>
				<span className="text text__small">created at {moment(recipe.createdAt).format("DD MMM YYYY")}</span>
			</div>
			<Link to={`/recipes/${recipe.id}`}><i className='fa fa-pencil'></i></Link>
		</div>
	)
}

export default Recipe