import { ADD_TODO,DEC_TODO} from "./actionType";


export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload
  };
};
export const decTodo = (payload) => {
  return {
    type: DEC_TODO,
    payload
  };
};