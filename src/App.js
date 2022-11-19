import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/home/home";
import AllProjectsPage from "./components/all-projects-page/all-projects-page";
import ProjectPage from "./components/project-page/project-page";
import NotFound from "./components/not-found/not-found";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>} />
            <Route path="home" element={<Home/>} />
            <Route path="projects" element={<AllProjectsPage/>} />
            <Route path="projects/:projectId" element={ <ProjectPage/> } />
            <Route path="*" element={<NotFound/> }/>
          </Route>
        </Routes>
      </>
    </div>
  );
}


export default App;
