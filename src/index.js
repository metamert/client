import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-client"
import {createHttpLink} from "apollo-link-http"
import {setContext} from "apollo-link-context"
import {ApolloProvider} from "@apollo/react-hooks"
import {Store,Persistor} from "../src/redux/store"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {BrowserRouter as Router} from "react-router-dom"
import { InMemoryCache } from 'apollo-cache-inmemory';


 
  


const httplink= createHttpLink({
  uri:"https://git.heroku.com/rocky-caverns-61000.git/graphql"

})
const authlink= setContext(()=>{
const token=localStorage.getItem("jwtToken")
return{
headers:{
  Authorization: token ? `Bearer ${token}` : ''

}


}


})

const client = new ApolloClient({
link: authlink.concat(httplink),
cache: new InMemoryCache()
})


ReactDOM.render(
  
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <Router>
          <PersistGate persistor={Persistor}>
    <App />
    </PersistGate>
    </Router>
    </Provider>
    </ApolloProvider>
  
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
