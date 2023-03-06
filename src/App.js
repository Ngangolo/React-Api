import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
//import ProjectList from "./pages/ProjectList"
import ProjectCreate from "./pages/ProjectCreate"
import ProjectEdit from "./pages/ProjectEdit"
import ProjectShow from "./pages/ProjectShow"
import DocumentListe from './pages/DocumentListe'
import MultiStep from "./pages/MultiStep"
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <Router>
      <Routes>
          {/* <Route exact path="/"  element={<Login/>} /> */}
          <Route exact path="/"  element={<LandingPage/>} />
          <Route path="/register"  element={<Register/>} />
          <Route path="/dashboard"  element={<Dashboard/>} />
          {/* <Route exact path="/list"  element={<ProjectList/>} /> */}
          <Route path="/create"  element={<ProjectCreate/>} />
          <Route path="/edit/:id"  element={<ProjectEdit/>} />
          <Route path="/show/:id"  element={<ProjectShow/>} />
          <Route path="/showDocument"  element={<DocumentListe/>} />
          <Route path="/formu"  element={<MultiStep/>} />
          
      </Routes>
    </Router>
  );
}
        
export default App;