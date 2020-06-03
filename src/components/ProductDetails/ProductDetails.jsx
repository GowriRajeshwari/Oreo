import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './productDetails.less'
// import productdata from './productDetails.json';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import '../../assets'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            id: ''
        };
    }
    _onMouseMove = (id) => {
        this.setState({ show: true, id: id })
    }
    _onMouseOut = (id) => {
        this.setState({ show: false, id: id })
    }
    render() {
        return (
            <div className="firstcontainerdetails">
                <div className="rowdetails">
                    <div className="productSizedetails">
                        <div className="productNamedetails">
                            <div className="productColordetails">Product Details</div>
                            <small className="productWelcomedetails">Welcome to Oreo</small>
                        </div>
                        <div className="pathdetails">
                            <div className="homeIcon1details">
                                <div>
                                    <HomeIcon className="iconHomeColordetails" style={{ fontSize: "18px" }} />
                                </div>
                                <div className="oreo1">
                                    <div className="wordStyle1">Oreo</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle1">eCommerce</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle">ProductDetails</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerFluiddetails">
                    <div className="rowFlexdetails">
                        <div className="coldetails" >
                            <div className="productItemdetails">
                                <div className="roworder">
                                    <div className="columnWise">
                                        <div>
                                            <img src="../../assets/cycle.png" className="bigimg" />
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                    <div>
                                            <div>
                                            Simple Black Clock
                                            </div>
                                            <div>
                                            Current Price:
                                            </div>
                                            <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        </div>

                    </div>
     )}
    
}

     export default Product;