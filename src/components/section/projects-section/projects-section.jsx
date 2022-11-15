import React from "react";
import styled from "styled-components";

function ProjectsSection() {
    return(
        <ProjSec>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </ProjSec>
    )
}

const ProjSec = styled.div`
    display: grid;

    div {
        column-gap: 50px;
    }

`;

export default ProjectsSection;