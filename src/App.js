import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from "./pages/Home/Home";
import { List } from "./pages/List/List";


function App() {
  
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hotels" element={<List/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
