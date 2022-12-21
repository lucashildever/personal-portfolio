import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer";

import ProjDiv from "../../../proj-div/proj-div";

function ProjectsSection() {

    const [projectData, setProjectData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        let obsFunc = entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) 
                        dispatch(setSection("projects"))
            });
        };

        let observer = new IntersectionObserver(obsFunc, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        observer.observe(document.getElementById("projects-section"));
    });

    useEffect(() => {
        fetch('https://magenta-soap-production.up.railway.app/')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data.data.allProjects)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <ProjSec>
            <div id="projects-section" className="projSec">
                {projectData
                    .filter((item, index) => index < 4)
                    .map((item, index) => 
                            <ProjDiv 
                                title={item.title} 
                                key={index} 
                                image={item.img} 
                                projType={item.projType}
                                linkTo={index}
                            />
                        )
                }
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
        height: 400px;
        width: 400px;

        div {
            background-color: #acacac;
        }
    }
`;

export default ProjectsSection;