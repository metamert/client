import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "../src/components/header/header"
import Login from "../src/components/login/login"
import Home from "../src/pages/home.page"
import Anime1 from "../src/components/advancedanimation/index"
import {Route,Switch} from "react-router-dom"
import decode from "jwt-decode"
import Authroute from "./auth.router"
import Main from "../src/pages/mainpage/main"
import Tema from "../src/components/temaspace/temaspace"
import {logoutaction} from "../src/redux/user/user.reducer"
import {connect} from "react-redux"
import Signup from "../src/components/SignUp/Signup"
function App(props) {
useEffect(() => {
  console.log("useeffect kullanıldı")
  if(localStorage.getItem("jwtToken")){
const decodedtoken=decode(localStorage.getItem("jwtToken"))
if(decodedtoken.exp*1000<Date.now()){
//patladı tokesn
console.log("token patladı :"+decodedtoken)
localStorage.removeItem("jwtToken")
props.logout()
}



  }
  
}, 1)




console.log("app")
  return (

   <div >
  <Header/>  
    <Switch>
<Route  exact path="/" component={Tema} />    
 <Route path="/home" component={Home}/>
<Authroute  path="/login" component={Login}/>
<Authroute  path="/signup" component={Signup}/>

</Switch>

</div>
  );
}

const propsdispatch=(dispatch)=>({

logout:()=>{dispatch(logoutaction())}


})


export default connect(null,propsdispatch)(App)
