import React from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";


function Project() {
    const params = useParams()
    return(
        <StyledProject>

            <h2>Project {params.projectId}</h2>

        </StyledProject>

    ) 
}

const StyledProject = styled.div`
    background-color: black;
    height: 100vh;
`


export default Project;