import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import {
  Mail,
  Menu,
  Home,
  SwapHoriz,
  Event,
  ContactPhone,
  Notifications,
  Flag,
  Search,
  PowerSettingsNew,
  Settings,
} from "@material-ui/icons";
import "./dashboard.less";
import Product from "../Product/Product";
import ProductList from "../ProductList/ProductList";
import ProductDetails from "../ProductDetails/ProductDetails";
import Header from "../HeaderPage/HeaderPage";
import Dashboardchat from "../DashboardChart/DashboardChat";
import "../Product/product.less";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#8c99e0",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen, topIcon, showicon] = React.useState(false);
  const [choice, setChoice] = React.useState("Product");
  const [spinner, setSpinner] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const clickHomeICon = () => {
    topIcon(!topIcon);
  };
  const showButton = () => {
    showicon(!showicon);
  };
  const screenChanging = (text) => {
    setChoice(text);
  };

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    !spinner && (
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
              <Menu />
            </IconButton>
            <div className="rowWise2">
              <div className="rowWise">
                <img src="../../assets/logo.svg" width="30px" />
                <div className="alignment">
                  <div className="fontStyle">OREO</div>
                </div>

                <div className="alignment1">
                  <SwapHoriz className="iconColorAppbar fontStyle" />
                </div>

                <div className="alignment">
                  <Event className="iconColorAppbar fontStyle" />
                </div>
                <div className="alignment">
                  <Mail className="iconColorAppbar fontStyle" />
                </div>
                <div className="alignment">
                  <ContactPhone className="iconColorAppbar fontStyle" />
                </div>
                <div className="alignment">
                  <div className="notificationrotate">
                    <div className="notify">
                      <span className="heartbit"></span>
                      <span className="point"></span>
                    </div>
                    <Notifications className="iconColorAppbar fontStyle" />
                  </div>
                </div>
                <div className="alignment">
                  <div className="notificationrotate">
                    <div className="notify">
                      <span className="heartbit"></span>
                      <span className="point"></span>
                    </div>
                    <Flag className="iconColorAppbar fontStyle" />
                  </div>
                </div>

                <div className="alignment2">
                  <div className="search">
                    <input
                      placeholder="Search..."
                      className="inputsearch"
                      style={{
                        disableUnderline: true,
                      }}
                    />
                  </div>
                  <div className="alignment3">
                    <Search className="blackColor fontStyle" />
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="rowWise1">
                <div className="alignment">
                  <PowerSettingsNew className="iconColorAppbar fontStyle" />
                </div>
                <div className="alignmentrotate">
                  <Settings className="iconColorAppbar3 fontStyle" />
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>

        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Header screenChanging={screenChanging} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="left"
          >
            <Header screenChanging={screenChanging} />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className="rowP">
            <div className="productSizeP">
              <div className="productNameP">
                <div className="productColorP">{choice}</div>
                <small className="productWelcomeP">Welcome to Oreo</small>
              </div>
              <div className="pathP">
                <div className="homeIcon1P">
                  <div>
                    <Home className="iconHomeColorP fontStyle" />
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
          {choice === "Product List" ? (
            <ProductList />
          ) : choice === "Product" ? (
            <Product />
          ) : choice === "Dashboard" ? (
            <Dashboardchat />
          ) : choice === "Product Details" ? (
            <ProductDetails />
          ) : (
            <Product />
          )}
        </main>
      </div>
    )
  );
}

export default ResponsiveDrawer;
