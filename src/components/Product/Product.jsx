import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './product.less'
import productdata from './product.json'
// import '../../assets'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 render(){
     return(
         <div>
        <div className="rowP">
            <div className="productSizeP">
            <div className="productNameP">
                    <div className="productColorP">Product</div>
                    <small className="productWelcomeP">Welcome to Oreo</small>
            </div>
            <div className="pathP">
            <div className="homeIcon1P">
                    <div>
                        <HomeIcon className="iconHomeColorP" style={{fontSize:"18px"}}/>
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

        <div className="containerFluid">
            <div className="rowFlex">
                {productdata.map(data => (
                    
                        <div className="col" key={data.id}>
                        <div className="productItem">
                            <div className="boby">
                                <div className="imgFolder">
                                     <img src={data.img} className="imgSize"/>
                                </div>
                                {/* <div className="hover">

                                </div> */}
                                <div>
                                    <div>
                                        {data.productName}
                                    </div>
                                    <div>
                                        <div>
                                            {data.dollar}
                                        </div>
                                        <div>
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
     )}
    
}

     export default Product;