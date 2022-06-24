import React from 'react';
import AppRoutes from './configs/routes';

function App() {
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'recipes'), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });

  //   return unsubscribe 
  // }, []);

  // store.dispatch(startSetRecipes()).then(console.log('done'))
  
  return (
      <AppRoutes />
  );
}

export default App;
