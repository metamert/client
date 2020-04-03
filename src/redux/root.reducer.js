import {combineReducers} from "redux"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import {Errorreducer} from "../redux/error.reducer/error.reducer"
import {Userreducer} from "../redux/user/user.reducer"
import {Postreducer} from "../redux/post.reducer/post.reducer"
const persistconfig={
key:"root",
storage,
whitelist:["user"]


}

const rootReducers=combineReducers(

{
    error:Errorreducer,
user:Userreducer,
posts:Postreducer
}

)



export default persistReducer(persistconfig,rootReducers)