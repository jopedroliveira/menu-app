import moment from 'moment';
import db from './../../configs/firebase';
import {collection, addDoc, setDoc, doc, getDocs} from 'firebase/firestore';

export const addRecipe = (
  {
    id = '',
    title = '',
    note = '',
    type = '',
    createdAt = '',
  } = {}
) => ({
  type: 'ADD_RECIPE',
  recipe: {
    id,
    title,
    note,
    type,
    createdAt,
  }
});

export const startAddRecipe = (recipeData = {}) => {
  // this only work because of redux thunk middleware
  return (dispatch) => {
    const { title = '',
            note = '',
            type = '' } = recipeData;
    const recipe = {title, note, type, createdAt: moment().valueOf()};
    const collectionRef = collection(db, 'recipes');
    
    addDoc(collectionRef, recipe).then((ref) => {
      dispatch(addRecipe({id: ref.id, ...recipe}));
    })
  }
}

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

export const startEditRecipe = (id, updates) => {
  
  return (dispatch) => {
    const docRef = doc(db, 'recipes', id);
    setDoc(docRef, {...updates, note: updates.note ? updates.note : ''}).then((ref) => {
      console.log('doooone');
      dispatch(editRecipe(id, updates));
    })
  }
}

export const setRecipes = (recipes) => ({
  type: 'SET_RECIPES',
  recipes
});


export const startSetRecipes = () => async (dispatch) => {
    async function getRecipes() {
      const recipCol = collection(db, 'recipes');
      const recipeSnapshot = await getDocs(recipCol);
      const recipesList = recipeSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      return recipesList;
    }
    try {
      dispatch(setRecipes(await getRecipes()));
    } catch (error) {
      console.log(error);
    }

};