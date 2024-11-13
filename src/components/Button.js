import { useNavigate } from "react-router-dom";


function Button() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        console.log("Click");
        // console.log(stateV);
        
        
       navigate("/addTask")}
       
    
  return (
  
      <button onClick={handleClick} className="btn">Add</button>
   
  )
}

export default Button
