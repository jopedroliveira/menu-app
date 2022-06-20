import React from 'react';

import Week from './../componetns/Week';
import Navigation from './../componetns/Navigation';
import Generator from './../componetns/Generator';



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