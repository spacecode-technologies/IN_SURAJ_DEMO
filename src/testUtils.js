// import {createStore,applyMiddleware} from 'redux';
import Rootreducer from '../src/redux/reduser/rootreducer';
// import ReduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";


// export const middlewares=[ReduxThunk]

export const storefactory=(initialState)=>{
    return createStore(Rootreducer,initialState,applyMiddleware(Thunk))
    }


    export function findTestAttr(wrapper,val){
        return( wrapper.find(`[data-testid='${val}']`));
    }