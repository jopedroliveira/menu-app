import uuid from 'uuid';
import moment from 'moment';

const mealsReducerDefaultState = [

    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().subtract(4, 'days'),
        type: 'dinner',
        createdAt: moment()
    },

    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().subtract(3, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().subtract(2, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().subtract(1, 'days'),
        type: 'dinner',
        createdAt: moment()
    },

    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment(),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(1, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(2, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(3, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(4, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(5, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(6, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Sopa da Pedra',
        note: '111',
        date: moment().add(7, 'days'),
        type: 'dinner',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment(),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(1, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(2, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(3, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(4, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(5, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(6, 'days'),
        type: 'lunch',
        createdAt: moment()
    },
    {
        id: uuid(),
        title: 'Hamburger',
        note: '111',
        date: moment().add(7, 'days'),
        type: 'lunch',
        createdAt: moment()
    }];

// Add meal
const mealsReducer = (state = mealsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MEAL':
            return [
                ...state,
                action.meal
            ];
        case 'REMOVE_MEAL':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_MEAL':
            return state.map((meal) => {
                if (meal.id === action.id) {
                    return {
                        ...meal,
                        ...action.updates
                    };
                } else {
                    return meal
                };
            });
        default:
            return state;
    }
};

export default mealsReducer;