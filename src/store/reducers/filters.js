import moment from 'moment'
// Filters Reducer

const filtersReducerDefaultState = {
    startDate: moment().startOf('week'),
    endDate: moment().endOf('week')
  };
  
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SUBTRACT_WEEK':
            return {
                ...state,
                startDate: state.startDate.subtract(1, 'week'),
                endDate: state.endDate.subtract(1, 'week')
            };
        
        case 'ADD_WEEK':
            return {
                ...state,
                startDate: state.startDate.add(1, 'week'),
                endDate: state.endDate.add(1, 'week')
            };
        
        case 'SET_CURRENT_WEEK':
            return {
                ...state,
                startDate: moment().startOf('week'),
                endDate: moment().endOf('week')
            }
        
        default:
            return state;
    }
};

export default filtersReducer;
  