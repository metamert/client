import React from "react"

import {connect} from "react-redux"

import {Route, Redirect} from "react-router-dom"


const Authrouter=({component:Component,user,...rest})=>{

console.log(Component)
    return(


<Route
{...rest}
render={
(props)=> user?(<Redirect to="/"/>):(<Component {...props}/>)



}



/>

    )
}

const statetoprops=(state)=>({


user:state.user.user

})
export default connect(statetoprops)(Authrouter)