
export const adduseraction=(user)=>(

{
type:"adduseraction",
payload:user

}
)
export const logoutaction=()=>(

{type:"logoutaction"}

)









const INITIAL_STATE={
    
    user:null,
    
    }

export const Userreducer=(state=INITIAL_STATE,action)=>{

    switch(action.type){
    case "adduseraction":
    
    
    return{
    ...state,
    
    user:action.payload
    
        };
    case "logoutaction":
        return{

            ...state,
            user:null
        }  
        default:
            return state
    
    
    
    }
    
    
    
    
    }
   