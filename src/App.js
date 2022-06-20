import React from 'react';
import { Provider } from 'react-redux';
import config from './store/config';

import AppRoutes from './configs/routes';

const store = config();


function App() {
  return (
    // <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    //</React.StrictMode>
  );
}

export default App;
