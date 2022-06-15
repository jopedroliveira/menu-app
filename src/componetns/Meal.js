import React from 'react'
import moment from 'moment'

const Meal = ({meal}) => {
  return (
    <>
        <p className='meal__date'><strong>{moment(meal.date).format('dddd')}</strong>, {meal.type}</p>
        <h1 className='meal__title'>{meal.title}</h1>
        <p className='meal__notes'>Notes: {meal.notes}</p>
        <button type='button' className='btn btn-outline-warning meal__edit_btn'>Edit</button>
    </>
    
  )
}

export default Meal