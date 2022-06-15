import React from 'react';
import Header from './componetns/Header';
import Navigation from './componetns/Navigation';
import Generator from './componetns/Generator';
import Week from './componetns/Week'; 
function App() {
  return (
      <div className='main'>
        <Header />
        <Navigation />
        <Week />
        <Generator />
      </div>

  );
}

export default App;
