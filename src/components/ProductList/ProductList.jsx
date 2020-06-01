import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './productList.less'
import productList from './productList.json'

// import '../../assets'

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 render(){
     return(
         <div className="firstcontainer"> 
         cmxbgdnfb
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
                            <div className="wordStyle">ProductList</div>
                        </div>
                </div>
            </div>
            </div>
        </div>

        <div className="containerFluid">
            <div className="rowFlex">
                {/* {productdata.map(data => (
                    
                        <div className="col" key={data.id}>
                        <div className="productItem">
                            <div className="boby">
                                <div className="imgFolder">
                                     <img src={data.img} className="imgSize"/>
                                </div>
                                <div className="hoverbutton">
                                    <div>sdsdsd</div>
                                </div>
                                <div className="columnProduct">
                                    <div className="productname"> 
                                        {data.productName}
                                    </div>
                                    <div className="rowProduct">
                                        <div >
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
                    
                ))} */}
               
            </div>
        </div>

        </div>
     )}
    
}

     export default ProductList;