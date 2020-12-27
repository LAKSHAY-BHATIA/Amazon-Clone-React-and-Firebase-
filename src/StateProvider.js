import React,{useContext,useReducer,createContext} from 'react';

const StateProviderContext = createContext();

const StateProvider = ({state,reducer,children})=>{
    return(
        <StateProviderContext.Provider value={useReducer(reducer,state)}>
            {children}
        </StateProviderContext.Provider>
    )
}

export default StateProvider;

export const useStateProvider = ()=>useContext(StateProviderContext);