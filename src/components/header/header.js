import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FaApple,FaSignInAlt,FaSignOutAlt } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import {logoutaction} from "../../redux/user/user.reducer"
import Email from "@material-ui/icons/Email";
import {Link} from "react-router-dom"
import {erroraction} from "../../redux/error.reducer/error.reducer"
// core components
import LOGO from "../../assets/share.png"
import Header from "./header.ui.js";


import Button from "../CustomButtons/Button";
import {connect} from "react-redux"


import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);

const HHeader=(props)=>{
const logoutt=()=>{
props.logout()
  localStorage.removeItem("jwtToken")


}
    const classes = useStyles();

return(

    <Header
   
    color="dark"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
leftLinks={
  <List className={classes.list}>
  <ListItem className={classes.listItem}>
    <Button
     
      className={classes.navLink}
      
      color="transparent"
      component={Link}
      to="/"
    >
      

      <img src={LOGO} style={{width:50}}></img>
    </Button>
   

  </ListItem>
  </List>
}
    rightLinks={
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Button
           
            className={classes.navLink}
            
            color="transparent"
            component={Link}
            to="/home"
          >
            
            Discover
            <FaApple style={{marginLeft:5,marginBottom:2}}></FaApple>
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          {
          props.user?( 
          
         
          <Button
            
            className={classes.navLink}
            onClick={logoutt}
            color="transparent"
            component={Link}
            to="/"
          >
            Log out
            <FaSignOutAlt style={{marginLeft:5}}></FaSignOutAlt>
          </Button>):(<Button
        
            className={classes.navLink}
            onClick={()=>{

props.adderror(null)

            }}
            color="transparent"
            to="/login" component={Link}
          >
            
            Sign in
            <FaSignInAlt style={{marginLeft:5}}></FaSignInAlt>
          </Button>)
          
        
        
        
        }
          
          
        
        </ListItem>
        <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
         
        </ListItem>
      </List>
    }
  />

)


}

const statetoprops=state=>(

  {

    user:state.user.user
  }
)

const propsdispatch=dispatch=>({

logout:()=>dispatch(logoutaction()),
adderror:(error)=>dispatch(erroraction(error))
})


export default connect(statetoprops,propsdispatch)(HHeader)