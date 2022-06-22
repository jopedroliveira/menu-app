import React from 'react';

import Week from '../components/Week';
import Navigation from '../components/Navigation';
import Generator from '../components/Generator';



const Dashboard = () => {
  return (
    <div className='main'>
      <Navigation />
      <Week />
      <Generator />
    </div>
  )
}

export default Dashboard