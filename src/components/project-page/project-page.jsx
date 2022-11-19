import React from "react";
import { useParams, Link } from "react-router-dom";

import styled from "styled-components";


function ProjectPage() {
    const params = useParams()
    console.log(params)
    return(
        <StyledProject>
            <div className="project-page">
                <PathLinks>
                    <Link to="/"><p>Home</p></Link>
                    <p className="greater-than">&gt;</p>
                    <Link to="/projects"><p>Projects</p></Link>
                    <p className="greater-than">&gt;</p>
                    <p>Project</p>
                </PathLinks>
                <div className="title-buttons">
                    <h2>{"Project ID: " + params.projectId}</h2>

                </div>
                <div className="project-image"></div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum. <br/><br/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </p>
            </div>
        </StyledProject>

    ) 
}

const StyledProject = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;

    div.project-page {
        width: 70vw;

        div.title-buttons h2 {
            padding-top: 30px;
            padding-bottom: 40px;
        }
        
        div.project-image {
            width: 100%;
            background-color: grey;
            height: 450px;
        }
        
        & > p {
            padding-top: 40px;
            text-align: justify;
        }
    }

`;

const PathLinks = styled.div`
    display: flex;

    p.greater-than {
        padding-left: 12px;
        padding-right: 12px;
    }

    a:nth-child(1):hover,  a:nth-child(3):hover{
        cursor: pointer;
        text-decoration: underline white 2px;
    }
`;


export default ProjectPage;