import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import dashboard from "./components/Dashboard/Dashboard.jsx"
import dashboardHome from './components/DashboardHome/DashboardHome.jsx'
import product from './components/Product/Product.jsx'
import productList from './components/ProductList/ProductList.jsx'
import header from './components/HeaderPage/HeaderPage.jsx'
import productDetails from './components/ProductDetails/ProductDetails.jsx'
import DashboardChat from './components/DashboardChart/DashboardChat.jsx'
import Map from './components/DashboardChart/Map.jsx'


class App extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render() {
    const { loading } = this.state;
    
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready
    }
    
    return (
      <Router history={history}>
        <Switch>
      
          <Route path="/" exact component={dashboard} />
          <Route path="/dashboardHome" component={dashboardHome}/>
          <Route path="/productPage" component={product} />
          <Route path="/productList" component={productList} />
          <Route path="/productDetails" component={productDetails} />
          <Route path="/dashboardChat" component={DashboardChat} />
          <Route path="/map" component={Map} />
          <Route path="/header" component={header} />
  
  
    
        </Switch>
      </Router>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;