import AddTask from "./components/AddTask";
import Headers from "./components/Headers";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return(
 <Router>
  <Routes>
  <Route path="/" element={<Headers />} />
  <Route path="/addTask" element={<AddTask />} />
  </Routes>
 </Router>
  )
}

export default App;
