import React, { Component } from "react";
import HomeIcon from '@material-ui/icons/Home';
import './product.less'
import productdata from './product.json';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import '../../assets'

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        show : true,
        id : ''
    };
  }
  _onMouseMove = (id) => {
    this.setState({ show: true ,id : id  })
  }
  _onMouseOut = (id ) => {
    this.setState({ show: false,id : id })
  }
 render(){
     return(
         <div className="firstcontainer"> 
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
                                <div onMouseMove={()=>this._onMouseMove(data.id)} onMouseLeave={()=>this._onMouseOut(data.id)}>
                                <div  className={this.state.show && this.state.id === data.id ? "imgFoldershow" : "imgFolder"} > 
                                     <img src={data.img}  className={this.state.show && this.state.id === data.id ? "imgSizeshow" : 'imgSize'}/>
                                </div>
                                {/* { this.state.show && this.state.id === data.id ?
                                 <div className="hoverbutton">
                                 <div className="row">
                                     <div className="buttoncolor">
                                        <AddIcon/>
                                     </div>
                                     <div className="buttoncolor">
                                        <ShoppingCartIcon/>
                                     </div>
                                 </div>
                                 </div> : null
                                } */}
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
                    
                ))}
               
            </div>
        </div>

        </div>
     )}
    
}

     export default Product;