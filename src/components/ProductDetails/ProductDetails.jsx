import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './productDetails.less'
import productdetails from './productDetails.json';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import '../../assets'

class Product extends React.Component {
    constructor(props) {
        
        super(props);
        this.state = {
            show: true,
            id: '',
            listId:'',
            image : "../../assets/cycle.png",
            index:"0"
        };
    }
    _onMouseMove = (id) => {
        this.setState({ show: true, id: id })
    }
    _onMouseOut = (id) => {
        this.setState({ show: false, id: id })
    }
    imageButton=(img,id,index)=>{
        console.log(img,id,index)
        this.setState({image : img,listId : "",index:index})
    }
    render() {
        return (
            <div className="firstcontainerdetails">
                {/* <div className="rowdetails">
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
                </div> */}

                <div className="containerFluiddetails">
                    <div className="rowFlexdetails">
                        <div className="coldetails" >
                            <div className="productItemdetails">
                                <div className="roworder">
                                    <div className="columnWise">
                                        <div>
                                            <img src={this.state.image} className="bigimg" />
                                        </div>
                                        <div style={{display:"flex",flexDirection:"row",padding : "5px"}}>
                                        {/* {this.state.data.filter(searchigFor(this.props.query)).map((data, index) => { */}
                                            {productdetails.Images.map((data,index) => (
                                                <div key={data.id} onClick={()=>this.imageButton(data.img,data.id,index)} >
                                                    <img src={data.img}  className="smallimssize"/>
                                               </div>
                                                    ))}
                                                </div>
                                    </div>
                                    {/* {productdetails.DetailsList.map(datalist => ( */}
                                        <div className="rowSide" >
                                            <div className="h3Style">
                                            {/* Simple Black Clock */}
                                           {productdetails.DetailsList[this.state.index].title}
                                            </div>
                                            <div className="clockrow">
                                                <div className="h3Style">Current Price:</div>
                                                <div className="h3Stylecolor">{productdetails.DetailsList[this.state.index].price}</div>

                                            </div>
                                            <p className="para1style">
                                                {productdetails.DetailsList[this.state.index].description}
                                            </p>
                                            <p className="para1style">
                                                78% of buyers enjoyed this product! (23 votes)
                                            </p>
                                            <div className="clockrow">
                                                <div className="h3Style">sizes:</div>
                                                <div className="h3Style21">s</div>
                                                <div className="h3Style2">m</div>
                                                <div className="h3Style2">l</div>
                                                <div className="h3Style2">xl</div>



                                            </div>
                                            {/* <div className="clockrow">
                                                <div className="colors1"></div>

                                            </div> */}
                                        </div>
                                                     {/* ))}  */}

                                    </div>
                                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                                              
                   
                </div>
     )}
    
}

     export default Product;