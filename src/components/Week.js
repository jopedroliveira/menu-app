import React from 'react'
import { connect } from 'react-redux'
import Meal from './Meal';
import selectMeals from '../store/selectors/meals'

const Week = (props) => {
  const emptySpace = (id) => <div key={`empty_${id}`} id={`empty_${id}`} className='meal empty'><p className='meal__date'><strong>{id}</strong></p></div>

  const listLunchMeals = (meals, type) => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let days_array = [...Array(7)].map((x, i) => emptySpace(weekdays[i]));

    const meals_array = meals.filter((meal) => meal.type === type ? true : false);

    meals_array.map((meal) => {
      days_array[meal.date.isoWeekday() - 1] = <div className={`meal ${meal.type}`} key={`meal_${meal.type}_${meal.date}`}><Meal meal={meal} /></div>
    })

    return days_array;
  }

  return (
    <div className="week">
      <div><h1>Week</h1></div>
      <div className='container plan'>
        <div className="row">{listLunchMeals(props.meals, 'lunch')}</div>
        <div className="row">{listLunchMeals(props.meals, 'dinner')}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    meals: selectMeals(state.meals, state.filters),
  }
}

const ConnectedWeek = connect(mapStateToProps)(Week);
export default ConnectedWeek
