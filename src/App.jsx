import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Authentication from "./components/Authentication";
import "./App.css";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/register" element={<Authentication register />} />
          <Route path="/dashboard" element={<Dashboard dashboard />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
