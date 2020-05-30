import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import dashboard from "./components/Dashboard/Dashboard.jsx"
import dashboardHome from './components/DashboardHome/DashboardHome.jsx'
import product from './components/Product/Product.jsx'


function App() {
  return (
    <Router history={history}>
      <Switch>
    
        <Route path="/" exact component={dashboard} />
        <Route path="/dashboardHome" component={dashboardHome}/>
        <Route path="/productPage" component={product} />

  
      </Switch>
    </Router>
  );
}
export default App;