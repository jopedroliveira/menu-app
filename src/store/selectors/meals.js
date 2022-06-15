 // Get visible expenses
 import moment from "moment";

const filter = (meals, { startDate, endDate }) => {
    return meals.filter((meal) => {
      const dateMoment = moment(meal.date)
      const startDateMatch = startDate ? startDate.isSameOrBefore(dateMoment, 'week') : false;
      const endDateMatch = endDate ? endDate.isSameOrAfter(dateMoment, 'week') : false;
      
      return startDateMatch && endDateMatch
    
      }).sort((a, b) => {
    //   if (sortBy === 'date') {
        return a.date > b.date ? 1 : -1;
    //   } else if (sortBy === 'amount') {
    //     return a.amount < b.amount ? 1 : -1;
    });
  };
  

  export default filter