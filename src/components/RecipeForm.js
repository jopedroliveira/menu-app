import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = (props) => {
  const navigate = useNavigate();

	const [title, setTitle] = useState(props.recipe ? props.recipe.title : '');
  const [notes, setNotes] = useState(props.recipe ? props.recipe.notes : '');
  const [error, setError] = useState('');

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (!title) {
      setError('Please provide a valid title');
    } else {
      setError('');
      props.onSubmit({title: title, notes: notes});
      
      if(props.recipe){
       navigate('/recipes');
      } else {
        setTitle('');
        setNotes('');
      }
    }
  }

	return (
    <>  
      {error && <span className='text__error'>{error}</span>}
      <form className='form'>
        <input 
          className='form__field'
          type='text' 
          placeholder='title' 
          autoFocus
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}></input>
        <textarea 
          className='form__field text-area'
          type='text'
          placeholder='notes'
          value={notes}
          onChange={(e) => {setNotes(e.target.value)}}></textarea>
        <button
          className='form__submit__btn'
          onClick={handleSubmitButton}>Submit</button>
      </form>
    </>
	)
}

export default RecipeForm