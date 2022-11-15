import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/home/home";
import ProjectsPage from "./components/project-page/project-page";
import Project from "./components/project-page/project/project";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="projects" element={<ProjectsPage/>} />
            <Route path="projects/:projectId" element={ <Project/> } />
            <Route path="*" element={<NotFound/> }/>
          </Route>
        </Routes>
      </>
    </div>
  );
}


export default App;
