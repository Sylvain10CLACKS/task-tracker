import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tasks" element={<EditTask/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App