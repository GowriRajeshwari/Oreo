import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.less';
import './components/Dashboard/dashboard.less'
import './components/DashboardHome/dashboardHome.less'
import './components/Product/product.less'
const title = 'React with Webpack and Babel';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import HeaderPageReducer from './reducers/HeaderPageReducer'
import store from './store/store'
// const store = createStore(HeaderPageReducer);
// debugger;
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('app')
);




