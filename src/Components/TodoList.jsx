import { Center,  Table,Thead,Tbody,Tr,Th,Td,Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../Redux/action";

export const TodoList = () => {
   
    const {todo} = useSelector((state) => state)
    
    const dispatch = useDispatch();

    React.useEffect(()=>{
       
        const fetchData = async() => {

        try{
        const request = await fetch("http://localhost:8080/todo");
        const data = await request.json();
        dispatch(addTodo(data));
            }
            catch(error){
               console.log(error)
            }
        }
       fetchData();
    },[dispatch])
return(

    <div>
     <Center p={4}><h2 style={{fontWeight: "bold"}}>To Do List: </h2></Center>
     
     <div>
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Sr.no</Th>
                    <Th>Title</Th>
                    <Th>Status</Th>
                    <Th>Edit/Check Details</Th>
                </Tr>
            </Thead>
            <Tbody>
        {
            todo?.map((e,i)=>{
              
               return( <Tr key={e.id}>
                  <Td>{i+1}</Td>
                  <Td>{e.title}</Td>
                  {e.status  ? <Td>Completed</Td> : <Td>Not Completed</Td>}
                  <Td><Center><Link to={`/${e.id}`}><Button bg='black' color="white" size='sm'>Edit</Button></Link></Center></Td>
               </Tr>)

            })
        }
        </Tbody>
        </Table>
     </div>
    </div>
)

}