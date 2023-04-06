import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

export default function App(){
  return (
  <div className="App">
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
    </Layout>

  </div>
  );
}

