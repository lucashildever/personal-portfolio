import React from "react";
import NavBar from "./components/nav-bar/navBar";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact";
import Project from "./components/project/project";
import NotFound from "./components/not-found/not-found"

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="projects/:projectId" element={ <Project/> } />
            <Route path="contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/> }/>
          </Route>
        </Routes>
      </>
    </div>
  );
}



function Layout(){
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default App;
