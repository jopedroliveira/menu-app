import moment from 'moment';
import uuid from 'uuid';

export const addRecipe = (
    {
      title = '',
      note = '',
      type = ''
    } = {}
  ) => ({
    type: 'ADD_RECIPE',
    recipe: {
      id: uuid(),
      title,
      note,
      type,
      createdAt: moment(),
    }
  });
  
  // REMOVE_RECIPE
  export const removeRecipe = ({ id } = {}) => ({
    type: 'REMOVE_RECIPE',
    id
  });
  
  // EDIT_RECIPE
  export const editRecipe = (id, updates) => ({
    type: 'EDIT_RECIPE',
    id,
    updates
  });
  