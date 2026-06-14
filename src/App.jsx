import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/projectDetails";
import BlurBackround from "./components/BlurBackround";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx"

const Home = () => {
  return (
    <div className="scroll-smooth">
      <BlurBackround/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

const App = () => {
  return(
    <>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/project/:id" element={<ProjectDetails/>} />
      </Routes>
    </>
  )
}

export default App
