import { ADD_TODO, DEC_TODO } from "./actionType"


const state = {

    todo : []
}

export const reducer = (state,{type,payload}) =>{

    switch (type)

    {
     case ADD_TODO:
   { return {
        ...state , todo : payload
    };}

    case DEC_TODO:
    {return{
        ...state , todo : todo
    };
  }     
    default: {
        return state
    }
    }
}