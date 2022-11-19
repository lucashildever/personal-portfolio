import React from "react";
import styled from "styled-components";

function ProjectsSection() {
    return(
        <ProjSec>
            <div className="projSec">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </ProjSec>
    )
}

const ProjSec = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    
    div.projSec {
        margin-left: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
        height: 350px;
        width: 350px;


        div {
            background-color: #acacac;
        }
    }

`;

export default ProjectsSection;