import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './productList.less'
import productlistdata from './productList.json'
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import '../../assets'

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="firstcontainerlist">
                <div className="rowlist">
                    <div className="productSizelist">
                        <div className="productNamelist">
                            <div className="productColorlist">Product</div>
                            <small className="productWelcomelist">Welcome to Oreo</small>
                        </div>
                        <div className="pathlist">
                            <div className="homeIcon1list">
                                <div>
                                    <HomeIcon className="iconHomeColorlist" style={{ fontSize: "18px" }} />
                                </div>
                                <div className="oreo1">
                                    <div className="wordStyle1">Oreo</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle1">eCommerce</div>
                                    <div className="wordStyle">/</div>
                                    <div className="wordStyle">ProductList</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="containerFluidlist">
                    <div className="rowFlexlist">

                        <div className="rowWiselist">

                            <div className="Imagehead">
                                Image
                                </div>
                            <div className="ProductlistNamehead" >
                                Product Name
                                </div>
                            <div className="detailshead">
                                Details
                                </div>
                            <div className="amounthead">
                                Amount
                                </div>
                            <div className="stockhead">
                                Stock
                                </div>
                            <div className="Actionhead">
                                Action
                              </div>
                        </div>
                        <Divider />
                        {productlistdata.map(data => (
                                <div>
                            <div className="rowWiselist">
                                <div className="Image">
                                    <img src={data.img} className="imagesize" />

                                </div>
                                <div className="ProductlistName">
                                    {data.productName}
                                </div>
                                <div className="details">
                                    {data.details}
                                </div>
                                <div className="amount">
                                    {data.dollar}
                                </div>
                                <div className="stock">
                                    {data.stock}
                                </div>
                                <div className="Action" >
                                    <div className="rowlistbutton">
                                        <div className="imagButton">
                                            <EditIcon/>
                                        </div>
                                        <div className="imagButton1" >
                                            <DeleteIcon/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Divider/>

                            </div>

                        ))}
    
                    </div>
                </div>
                
                <div className="containerFluidlist">
                    <div className="rowFlexlist"></div></div>

            </div>
        )
    }

}

export default ProductList;