import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Styles
// cleanup
import 'normalize.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';

// app styles
import './styles/styles.scss'

//import reportWebVitals from './reportWebVitals';
import App from './App';



import { startSetRecipes } from './store/actions/recipes';
import config from './store/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = config();
root.render(<p>Loading...</p>)
store.dispatch(startSetRecipes()).then(() => {
		root.render(
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
).catch(() => {
	root.render(<p>An error has occured</p>)
});

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
