import React from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";
import { Home } from "./Components/Home";
import { TodoDetails } from "./Components/TodoDetails";
import { Center } from "@chakra-ui/react";

function App() {
  return (
    <div >
      <Center bg="#2490fe" h={70} color="white">
        <h1 style={{fontWeight : "bold"}}>Task Managing App</h1>
      </Center>
       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<TodoDetails/>}/>

       </Routes>
    
    </div>
  );
}

export default App;
