// import React from 'react';
// import HomeIcon from '@material-ui/icons/Home';
// import PersonIcon from '@material-ui/icons/Person';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import './dashboard.less';
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';



// // import '../../assets'

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//  render(){
//      return(
//         <div style={{backgroundColor:"red"}}>
//         ;iohjgjhfg
//         {/* <div className="topdrawer">
//             <div className="homeIcon">
//                 <div onClick={clickHomeICon}>
//                   <HomeIcon className="iconColor"/>
//                 </div>
//                 <div className="oreo">
//                     Oreo
//                 </div>
//             </div>
//             <div className="homeIcon">
//                 <div>
//                     <PersonIcon className="iconColor"/>
//                 </div>
//                 <div className="oreo">
//                     User
//                 </div>
  
//             </div>
//         </div> */}
//         <div>
//           <div className="header">
          
//             <div className="headerMain"> 
//              -- MAIN
//             </div>
//           </div>
//           <div>
            
//           </div>
//         </div>
//           <div className="header1">
//             <div>
//               <div className="expansion">
//                 <div className="expansion">
//                   <ShoppingCartIcon className="cartIcon" style={{fontSize:"20px",paddingRight:"3px"}}/>
//                   <div className="ecommerce">Ecommerce</div>
//                 </div>
//                 <div>
//                   <NavigateNextIcon className="cartIcon" style={{fontSize:"20px",marginTop:"10px"}}/>
//                 </div>
              
//               </div>
//               { this.state.show ? 
//               <div>
//               <div>
//                 <div className="expansion">
//                 <ArrowRightAltIcon/>
//                 <div>Dashboard</div>
//                 </div>
//                 <div className="expansion">
//                 <ArrowRightAltIcon/>
//                 <div>Product</div>
//                 </div>
//               </div>
//               </div> : null}
//             </div>
// </div>
//         </div>
    
//      )}
    
// }

//      export default Header;



import React from 'react';
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
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = theme => ({
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class Header extends React.Component  {
//   const { window } = props;
//   const classes = useStyles();
//   const theme = useTheme();
     constructor(props) {
        super(props);
        this.state = {
            mobileOpen : false,
            setMobileOpen : false
        };
      }
    

//   const [mobileOpen, setMobileOpen] = React.useState(false);

   handleDrawerToggle = () => {
       this.setState({ setMobileOpen : !this.state.mobileOpen })
    // setMobileOpen(!mobileOpen);
  }



//   const container = window !== undefined ? () => window().document.body : undefined;


render(){
    const {classes} = this.props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={ window !== undefined ? () => window().document.body : undefined}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
           <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
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
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
}

export default withStyles(useStyles)(Header);



