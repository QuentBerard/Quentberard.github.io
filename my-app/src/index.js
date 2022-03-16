import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Listofarticles from "./pages/listofarticles/Listofarticles"

// This file is were alll the paths to differents pages are gonna be made
//<Route path="/" element={<Layout />}></Route>
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         
          <Route index element={<Home />} />
          <Route path="listofarticles" element={<Listofarticles />} />
 
      
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));