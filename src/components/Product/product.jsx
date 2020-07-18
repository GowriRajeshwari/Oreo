import React, { Component } from "react";
import "./product.less";
import productdata from "./product.json";
import AddIcon from "@material-ui/icons/Add";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      id: "",
      timer: false,
    };
  }
  componentDidMount = () => {
    this.state.timer = setTimeout(() => this.setState({ timer: true }), 5000);
  };
  componentWillMount = () => {
    clearTimeout(this.state.timer);
  };
  _onMouseMove = (id) => {
    this.setState({ show: true, id: id });
  };
  _onMouseOut = (id) => {
    this.setState({ show: false, id: id });
  };
  render() {
    return (
      <div className="firstcontainer">
        <div className="containerFluid">
          <div className="rowFlex">
            <div className="rowFlex1">
              {productdata.map((data) => (
                <div className="col" key={data.id}>
                  <div className="productItem">
                    <div className="boby">
                      <div
                        onMouseMove={() => this._onMouseMove(data.id)}
                        onMouseLeave={() => this._onMouseOut(data.id)}
                      >
                        <div
                          className={
                            this.state.show && this.state.id === data.id
                              ? "imgFoldershow"
                              : "imgFolder"
                          }
                        >
                          <img
                            src={data.img}
                            className={
                              this.state.show && this.state.id === data.id
                                ? "imgSizeshow"
                                : "imgSize"
                            }
                          />
                        </div>

                        {this.state.show && this.state.id === data.id ? (
                          <div className="hoverbutton">
                            <div className="buttoncolor">
                              <AddIcon />
                            </div>
                            <div className="buttoncolor">
                              <ShoppingCartIcon />
                            </div>
                          </div>
                        ) : (
                          <div className="hoverbutton1">
                            <div className="buttoncolor">
                              <AddIcon />
                            </div>
                            <div className="buttoncolor">
                              <ShoppingCartIcon />
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="columnProduct">
                        <div className="productname">{data.productName}</div>
                        <div className="rowProduct">
                          <div>{data.dollar}</div>
                          <div className="discountDollar">
                            {data.discountDollar}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
