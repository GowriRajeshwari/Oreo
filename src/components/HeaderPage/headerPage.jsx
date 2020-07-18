import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./headerPage.less";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { connect } from "react-redux";
import { SHOW_HOME, SHOW_USER } from "../../constants/actionTypes.js";

const mapStateToProps = (state) => {
  console.log(state.slide);
  return {
    show: state.show,
    slide: state.slide,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showHome: () =>
      dispatch({
        type: SHOW_HOME,
      }),
    showUser: () =>
      dispatch({
        type: SHOW_USER,
      }),
  };
};
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      show: true,
      // slide : false,
    };
    this.oreobuton = () => this.props.showHome();
    this.Userbuton = () => this.props.showUser();
  }

  screenChanging = (text) => {
    this.setState({ choice: text });
    this.props.screenChanging(text);
  };
  render() {
    return (
      <div>
        <div className="topdrawer">
          <div className="homeIcon" onClick={() => this.oreobuton()}>
            <div>
              <HomeIcon className="iconColor" />
            </div>
            <div className="oreo">Oreo</div>
          </div>
          <div className="homeIcon" onClick={() => this.Userbuton()}>
            <div>
              <PersonIcon className="iconColor" />
            </div>
            <div className="oreo">User</div>
          </div>
        </div>

        {this.props.show === true ? (
          <div className={this.props.slide ? "stretchRight" : null}>
            <div className="header">
              <div className="headerMainheader">-- MAIN</div>
            </div>
            <div></div>

            <div className="header1">
              <div>
                <div className="expansion">
                  <div className="expansion">
                    <ShoppingCartIcon className="cartIcon iconStyle" />
                    <div className="ecommerceheader">Ecommerce</div>
                  </div>
                  <div onClick={() => this.expansed()}>
                    <NavigateNextIcon className="cartIcon iconStyle" />
                  </div>
                </div>

                <div>
                  <div>
                    <div
                      className="expansion1"
                      onClick={() => this.screenChanging("Dashboard")}
                    >
                      <ArrowRightAltIcon className="cartIcon iconStyle2" />
                      <div className="ecommerce1">Dashboard</div>
                    </div>
                    <div
                      className="expansion1 "
                      onClick={() => this.screenChanging("Product")}
                    >
                      <ArrowRightAltIcon className="cartIcon iconStyle2" />
                      <div className="ecommerce1">Product</div>
                    </div>
                    <div
                      className="expansion1"
                      onClick={() => this.screenChanging("Product List")}
                    >
                      <ArrowRightAltIcon className="cartIcon iconStyle2" />
                      <div className="ecommerce1">Product List</div>
                    </div>
                    <div
                      className="expansion1"
                      onClick={() => this.screenChanging("Product Details")}
                    >
                      <ArrowRightAltIcon className="cartIcon iconStyle2" />
                      <div className="ecommerce1">Product Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={this.props.slide ? "stretchLeft" : null}>
            <div>
              <a className="profileimg">
                <img
                  src="../../assets/profile.jpg"
                  className="profileimgsize"
                />
              </a>
            </div>
            <div className="profilesize">
              <h4 className="profilename">Michael</h4>
            </div>
            <div className="profilesize1">
              <div>Ux UI Designer</div>
            </div>
            <div className="profilesize1column">
              <div className="para">795 Folsom Ave, Suite 600</div>
              <div className="para">San Francisco, CADGE 94107</div>
            </div>
            <div className="rowshowalign">
              <h2 className="centerStyle">852</h2>
              <h2 className="centerStyle">13k</h2>
              <h2 className="centerStyle">234</h2>
            </div>
            <div className="rowshowalign">
              <h4>Following</h4>
              <h4>Follower</h4>
              <h4>Post</h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
