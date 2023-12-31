import "./App.css"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import CorrectAnswer from "./CorrectAnswer"
import WrongAnswer from "./WrongAnswer"
import Home from "./Home"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/correct/:answer" element={<CorrectAnswer />} />
        <Route path="/wrong/:answer" element={<WrongAnswer />} />
      </Routes>
    </>
  )
}

export default App
