import { useState, useContext } from "react";
import {TaskContext} from "../TaskContext"
import { Link } from "react-router-dom";

const AddTask = () => {
   
    
    const {task, setTask} = useContext(TaskContext);

    const [formData,setFormData]= useState({
        id:"",
        name:"",
        time:""
    });

    const [id,setId] = useState(0);

   
    const putTask=async(e)=>{
         e.preventDefault();
        console.log("Add man");
        const updatedId = id+1;  
        const updateFormData = { id:updatedId,
          name:document.getElementById("name").value,
          time:document.getElementById("tad").value};    
          console.log(updateFormData);
                      
       setFormData(updateFormData);
            console.log(formData);
        
        // location.state. setTask(formData);
        setId(updatedId)
        setTask((prevTasks) => [...prevTasks, updateFormData]);
        console.log(task);
        
        
    }
  return (
    <>
    <Link className="btn" to="/">Home</Link>
     <form onSubmit={putTask} >
      <label>Name:</label>
      <input type="text" id="name" ></input>
      <label>Date & Time</label>
      <input type="datetime-local" id="tad" ></input>
      <input className="btn" type="submit" value="Add Task"></input>
      </form>
    </>
  )
}

export default AddTask
