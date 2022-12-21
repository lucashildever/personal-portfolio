import React, { useEffect ,useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

function ProjectPage() {

    const projectId = useParams().projectId
    const [projectData, setProjectData] = useState({
        title: "",
        desc: ""
    })
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://magenta-soap-production.up.railway.app/')
            .then((response) => response.json())
            .then((data) => {
                if (projectId > Object.keys(data.data.allProjects).length) {
                    navigate("/projects/project-not-found")
                }
                setProjectData(data.data.allProjects[projectId - 1])
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        console.log(projectData)
    }, [projectData])
    
    return(
        <StyledProject>
            <div className="project-page">
                <PathLinks>
                    <Link to="/"><p>Home</p></Link>
                    <p className="greater-than">&gt;</p>
                    <Link to="/projects"><p>Projects</p></Link>
                    <p className="greater-than">&gt;</p>
                    <p>{projectData.title}</p>
                </PathLinks>
                <div className="title-buttons">
                    <h2>{projectData.title}</h2>

                </div>
                <div className="project-image"></div>
                <p>{projectData.desc}</p>
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