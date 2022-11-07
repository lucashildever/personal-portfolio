import React from "react";
import { useParams } from "react-router-dom";


function Project() {
    const params = useParams()
    return <h2>Project {params.projectId}</h2>
}


export default Project;