import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeForm = (props) => {
  const navigate = useNavigate();

	const [title, setTitle] = useState(props.recipe ? props.recipe.title : '');
  const [note, setNote] = useState(props.recipe ? props.recipe.note : '');
  const [error, setError] = useState('');

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (!title) {
      setError('Please provide a valid title');
    } else {
      setError('');
      props.onSubmit({title, note});
      
      if(props.recipe){
       navigate('/recipes');
      } else {
        setTitle('');
        setNote('');
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
          placeholder='note'
          value={note}
          onChange={(e) => {setNote(e.target.value)}}></textarea>
        <button
          className='form__submit__btn'
          onClick={handleSubmitButton}>Submit</button>
      </form>
    </>
	)
}

export default RecipeForm