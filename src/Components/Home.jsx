import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../Redux/action"
import {v4 as uuid} from "uuid";
import { TodoList } from "./TodoList";
import { Center,Input,Button } from "@chakra-ui/react";

export const Home = () => {

const [title,setTitle] = useState("")

const dispatch = useDispatch();

const handleAdd = () => {
    const payload = {
    id: uuid(),
    title : title,
    status: false
    }
   
   addToList(payload);
   setTitle("");

}

const addToList = async (payload) => {

    try {
        await fetch(`http://localhost:8080/todo`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
        fetchData()
    } catch (error) {
        console.log(error)
    }
}

const fetchData = async() => {
    try {
      const request = await fetch("http://localhost:8080/todo");
      const data = await request.json();
      dispatch(addTodo(data));    
    } catch (error) {
      console.log(error)
    }
  };

return(
     <div>
    <Center bg="black" h={10} color="white">
     <h1>Home Page</h1></Center>
     <Center p={9} h={35}>
        <Input  size='md' width='300px' type="text"  placeholder="Enter Task here" onChange={(e)=> (setTitle(e.target.value))}/>
     
        <Button bg='black' color="white" size='md' onClick={handleAdd}>Add</Button>
     </Center>
     <Center><TodoList/></Center>
     
    </div>
)

}