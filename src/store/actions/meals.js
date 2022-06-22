import uuid from 'uuid';

// ADD_MEAL
export const addMeal = (
    {
      title = '',
      note = '',
      type = '',
      date = '',
      createdAt = 0
    } = {}
  ) => ({
    type: 'ADD_MEAL',
    meal: {
      id: uuid(),
      title,
      note,
      date,
      type,
      createdAt
    }
  });
  
  // REMOVE_MEAL
  export const removeMeal = ({ id } = {}) => ({
    type: 'REMOVE_MEAL',
    id
  });
  
  // EDIT_MEAL
  export const editMeal = (id, updates) => ({
    type: 'EDIT_MEAL',
    id,
    updates
  });
  