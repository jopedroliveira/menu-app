import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { subOneWeek, addOneWeek, setCurrentWeek } from '../store/actions/filters'


const Navigation = (props) => {
  const [isCurrent, setIsCurrent] = useState(true);
  const today = moment();

  useEffect(() => {
    setIsCurrent(today.isSame(props.filters.startDate, 'week'));
  }, [today, props.filters.startDate])

  const handleRestartDate = () => {
    props.dispatch(setCurrentWeek());
    setIsCurrent(true);
  }

  const handlePreviousDate = () => {
    props.dispatch(subOneWeek());
    setIsCurrent(today.isSame(props.filters.startDate, 'week'));
  }

  const handleNextDate = () => {
    props.dispatch(addOneWeek());
    setIsCurrent(today.isSame(props.filters.startDate, 'week'));
  }

  return (
    <nav className="navigation">
      <button type='button' className='navigation__btn' onClick={handlePreviousDate}><i className="fa fa-chevron-left" /></button>
      <span className='date'>{moment(props.filters.startDate).format("DD MMM YYYY")} / {moment(props.filters.endDate).format("DD MMM YYYY")}</span>
      <button type='button' className='navigation__btn' onClick={handleNextDate}><i className="fa fa-chevron-right" /></button>
      <button disabled={!!isCurrent} type='button' className='navigation__btn' onClick={handleRestartDate}><i className="fa fa-calendar"></i></button>
    </nav>
  )
}


const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

const ConnectedNavigation = connect(mapStateToProps)(Navigation);
export default ConnectedNavigation