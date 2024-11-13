import { createContext,useState } from "react";

// Create a Context for the task data
export const TaskContext = createContext();

// Create a provider component
export const TaskProvider = ({ children }) => {
    const [task, setTask] = useState([]);

    return (
        <TaskContext.Provider value={{ task, setTask}}>
            {children}
        </TaskContext.Provider>
    );
};