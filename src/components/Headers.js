import Button from "./Button"
import { useState,useEffect,useContext } from "react";
import {TaskContext} from "../TaskContext";

const Headers = () => {
  const {task, setTask} = useContext(TaskContext);
  useEffect(()=>{
    const divTasks = document.getElementById("task");
    task.forEach(element => {
       const divTask= document.createElement("div");
       divTask.style.border = '2px inset ';
       divTask.style.width= '500px';
       divTask.style.height = '50px'

       const nameTask = document.createElement("h3");
       nameTask.innerHTML = element.name;

       const timeD = document.createElement("p");
       timeD.innerHTML = element.time;

       divTask.appendChild(nameTask);
       divTask.appendChild(timeD);
       divTasks.appendChild(divTask)
       
    });

  },task)
 
  return (
    <>
    <header>
        <h1 className="header">Task Tracker  </h1>
        <Button />
        {/* <AddTask /> */}
    </header>
    <div id="task"></div>
    </>
  )
}

export default Headers
