import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import EventIcon from '@material-ui/icons/Event';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';
import './dashboard.less';
import DashboardHome from '../DashboardHome/DashboardHome'
import Product from '../Product/Product'
import ProductList from '../ProductList/ProductList'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ProductDetails from '../ProductDetails/ProductDetails'
import Header from '../HeaderPage/HeaderPage'
import Dashboardchat from '../DashboardChart/DashboardChat'
// import logo from '../../assets/logo.svg'
import '../Product/product.less'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#8c99e0",
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },

  },
  // necessary for content to be below app bar
  //   toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen, topIcon, showicon] = React.useState(false);
  const [choice,setChoice] = React.useState("Product")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const clickHomeICon = () => {
    topIcon(!topIcon)
    console.log("homeicon clicked")
  }
  const showButton = () => {
    showicon(!showicon);
  }
  const screenChanging = (text) => {
    console.log(text)

    setChoice(text)
    // if(text === 'produtclist'){
    //   return <ProductList/>
    // }
  }

  // const getChoice =()=>{
  // const [choice,setChoice] = React.useState("")

  //   console.log("working crt")

  //   if(choice === 'productlist'){
  //   console.log("working crt")
      
  //   }
  // }
  const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="rowWise2">
            <div className="rowWise">
              <img src="../../assets/logo.svg" width="30px" />
              <div className="alignment">
                <div style={{ fontSize: "18px" }}>
                  OREO
                </div>
              </div>

              <div className="alignment1">
                <SwapHorizIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
              </div>

              <div className="alignment">
                <EventIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
              </div>
              <div className="alignment">
                <MailIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
              </div>
              <div className="alignment">
                <ContactPhoneIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
              </div>
              <div className="alignment">
                <div className="notificationrotate">
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                  <NotificationsIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />

                </div>

                {/* <a className="notification">
                  <span> <NotificationsIcon className="iconColorAppbar" style={{fontSize:"18px"}}/></span>
                  <span className="badge" ><FiberManualRecordIcon style={{fontSize:"8px",right: "-16px"}}/></span>
                </a> */}
              </div>
              <div className="alignment">
                <div className="notificationrotate">
                  <div className="notify">
                    <span className="heartbit"></span>
                    <span className="point"></span>
                  </div>
                  <FlagIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
                </div>
              </div>

              <div className="alignment2">
                <div className="search">
                  <input
                    placeholder="Search..."
                    className="inputsearch"
                    style={{ disableUnderline: true, outline: 'none', border: 'none' }}
                  //  onChange={this.queryfunction}
                  />
                </div>
                <div className="alignment3">
                  <SearchIcon className="blackColor" style={{ fontSize: "18px" }} />

                </div>
                <div>
                </div>

              </div>


            </div>
            <div className="rowWise1">
              <div className="alignment">
                <PowerSettingsNewIcon className="iconColorAppbar" style={{ fontSize: "18px" }} />
              </div>
              <div className="alignmentrotate">
                <SettingsIcon className="iconColorAppbar3" style={{ fontSize: "18px" }} />
              </div>
            </div>
          </div>
        </Toolbar>

      </AppBar>


      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
                <Header screenChanging={screenChanging}/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <Header screenChanging={screenChanging}/>
          </Drawer>
        </Hidden>
      </nav>
      <main>
      <div className="rowP">
            <div className="productSizeP">
                <div className="productNameP">
                        <div className="productColorP">{choice}</div>
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
                                <div className="wordStyle">{choice}</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        {choice === 'Product List' ?
        <ProductList/> :  choice === 'Product' ?
        
      <Product/> : choice === "Dashboard" ? <Dashboardchat/> : choice === 'Product Details' ? 
      <ProductDetails/> :  <Product/> }
        {/* <Product /> */}
      </main>
    </div>
  );
}



export default ResponsiveDrawer;