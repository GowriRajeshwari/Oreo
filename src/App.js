import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import dashboard from "./components/Dashboard/Dashboard.jsx"
import dashboardHome from './components/DashboardHome/DashboardHome.jsx'
import product from './components/Product/Product.jsx'
import productList from './components/ProductList/ProductList.jsx'
import header from './components/Dashboard/HeaderPage.jsx'
import productDetails from './components/ProductDetails/ProductDetails.jsx'


function App() {
  return (
    <Router history={history}>
      <Switch>
    
        <Route path="/" exact component={dashboard} />
        <Route path="/dashboardHome" component={dashboardHome}/>
        <Route path="/productPage" component={product} />
        <Route path="/productList" component={productList} />
        <Route path="/productDetails" component={productDetails} />
        <Route path="/header" component={header} />


  
      </Switch>
    </Router>
  );
}
export default App;