import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTodo } from "../Redux/action";
import { Button,Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const TodoDetails = () => {

    const { id } = useParams();
    const todo = useSelector((state) => state.todo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchData = async () => {
        try{
            const request = await fetch("http://localhost:8080/todo");
            const data = await request.json();
            dispatch(addTodo(data));
        }
        catch(error){
          console.log(error)
        }
    }

    const changeStatus = async(payload) =>{
        try {
          payload.status = !payload.status
          await fetch(`http://localhost:8080/todo/${payload.id}`,
          {
            method: "PUT",
            headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
          fetchData();

        } catch (error) {

          console.log(error);

        }
      }

      const delTodo = async(id) => {
        try {
            await fetch(`http://localhost:8080/todo/${id}`,
            {
              method: "DELETE",
              headers: {
              "Content-Type": "application/json"
          }
          });

          navigate("/")
        } catch (error) {
            console.log(error)
        }
      }
return(

    <div>
     <Center bg="black" h={10} color="white">
     <h1>Task Details : </h1></Center>
     <Center style={{margin:"20px"}}>
        {
            todo?.filter((e)=>{
                return e.id === id}).map((e)=>{
                    return(
                        <div key={e.id}>
                            <Center>
                            <h3>{`Title : ${e.title}`}</h3>
                            </Center><Center>
                            <h3>{`Status : ${e.status ? "Completed" : " Not Completed"}`}</h3>
                            </Center>
                            <Button bg="black" color="white" style={{margin:"10px"}} onClick={()=>changeStatus(e)}>{e.status ? "Mark as Not Completed" : "Mark as Completed"}</Button>
                            
                            <Button bg="black" color="white" style={{margin:"10px"}} onClick={()=>delTodo(e.id)}>REMOVE</Button>
                            <Center>
                              
                            <Link to="/"><Button bg="black" color="white" style={{margin:"10px"}}>Go Back to HomePage</Button></Link>
                            </Center>


                        </div>
                    )
                })
        }
     </Center>
    </div>
)

}