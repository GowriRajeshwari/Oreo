import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './headerPage.less';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { connect } from 'react-redux'
import { SHOW_HOME,SHOW_USER } from '../../constants/actionTypes.js'

const mapStateToProps=(state)=>{
    return{
        show : state.show
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
    showHome : () =>
        dispatch({
            type : SHOW_HOME
        }),
    showUser : () =>
        dispatch({
            type : SHOW_USER
        })
    }
    
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice : '',
            // show : true
        };
        this.oreobuton = () =>this.props.showHome();
        this.Userbuton = () =>this.props.showUser(); 
    }

    screenChanging=(text)=>{
        console.log(text)
        this.setState({ choice : text});
       this.props.screenChanging(text)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <div className={classes.toolbar} /> */}
                <div className="topdrawer">
                    <div className="homeIcon" onClick={()=>this.oreobuton()}>
                        <div>
                            <HomeIcon className="iconColor" />
                        </div>
                        <div className="oreo" >
                            Oreo
      </div>
                    </div>
                    <div className="homeIcon" onClick={()=>this.Userbuton()}>
                        <div>
                            <PersonIcon className="iconColor" />
                        </div>
                        <div className="oreo">
                            User
      </div>

                    </div>
                </div>
               


                {this.props.show === true ?
                
                <div>
                    <div>
                        <a className="profileimg">
                            <img src="../../assets/profile.jpg" className="profileimgsize"/>
                        </a>
                    </div>
                    <div className="profilesize">
                        <h4 className="profilename">Michael</h4>
                    </div>   
                    <div className="profilesize1">
                    <div>Ux UI Designer</div>
                    </div> 
                        {/* <div className="profilesize1">
                                 <div className="para">795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</div>
                        </div> */}
                </div>
                 :
                 <div>
                 <div className="header">

                     <div className="headerMain">
                         -- MAIN
                     </div>
                 </div>
                 <div>

                 </div>
            
                <div className="header1">
                    <div>
                        <div className="expansion">
                            <div className="expansion">
                                <ShoppingCartIcon className="cartIcon" style={{ fontSize: "20px", paddingRight: "3px" }} />
                                <div className="ecommerce">Ecommerce</div>
                            </div>
                            <div >
                                <NavigateNextIcon className="cartIcon" style={{ fontSize: "20px", marginTop: "10px" }} />
                            </div>

                        </div>


                        <div>
                            <div>
                                <div className="expansion1" onClick={()=>this.screenChanging("dashboard")}>
                                    <ArrowRightAltIcon className="cartIcon" style={{ fontSize: "20px", paddingRight: "3px" }} />
                                    <div className="ecommerce1">Dashboard</div>
                                </div>
                                <div className="expansion1" onClick={()=>this.screenChanging("product")}>
                                    <ArrowRightAltIcon className="cartIcon" style={{ fontSize: "20px", paddingRight: "3px" }} />
                                    <div className="ecommerce1">Product</div>
                                </div>
                                <div className="expansion1" onClick={()=>this.screenChanging("productlist")}>
                                    <ArrowRightAltIcon className="cartIcon" style={{ fontSize: "20px", paddingRight: "3px" }} />
                                    <div className="ecommerce1">Product List</div>
                                </div>
                                <div className="expansion1" onClick={()=>this.screenChanging("productdetails")}>
                                    <ArrowRightAltIcon className="cartIcon" style={{ fontSize: "20px", paddingRight: "3px" }} />
                                    <div className="ecommerce1">Product Details</div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </div>
               
                </div> }








                
            </div>

        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Header);


