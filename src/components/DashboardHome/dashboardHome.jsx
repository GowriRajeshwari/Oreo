import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import "./dashboardHome.less";

class DashboardHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="productSize">
          <div className="productName">
            <div className="productColor">Product</div>
            <small className="productWelcome">Welcome to Oreo</small>
          </div>
          <div className="path">
            <div className="homeIcon1">
              <div>
                <HomeIcon
                  className="iconHomeColor"
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div className="oreo1">
                <div className="wordStyle1">Oreo</div>
                <div className="wordStyle">/</div>
                <div className="wordStyle1">eCommerce</div>
                <div className="wordStyle">/</div>
                <div className="wordStyle">Product</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardHome;
