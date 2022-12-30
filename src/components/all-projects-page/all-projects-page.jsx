import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectMode } from "../../reducers/modeReducer"

import ProjDiv from "../proj-div/proj-div";

function AllProjectsPage() {

    const [projectData, setProjectData] = useState([]);

    const mode = useSelector(selectMode)

    useEffect(() => {
        //fetch('https://magenta-soap-production.up.railway.app/')
        fetch('http://localhost:5555/')
            .then((response) => response.json())
            .then((data) => {
                setProjectData(data.data.allProjects)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <PageContent>
            <div className={`page-content ${mode ? "light" : ""}`}> 
                <PathLinks className="menu-texts">
                    <Link to="/"><p>Home</p></Link>
                    <p>{" > Projects"}</p>
                </PathLinks>
                <h2>Projecs</h2>
                <AllProjs>
                    {projectData
                        .map((item, index) => 
                                <ProjDiv 
                                    title={item.title} 
                                    key={index} 
                                    // image={item.img} 
                                    image={""} 
                                    projType={item.projType}
                                    linkTo={index}
                                />
                            )
                    }
                </AllProjs>
            </div>
        </PageContent>
    )
};

const PageContent = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
    
    div.page-content {
        width: 70vw;

        h2 {
            padding-top: 30px;
            padding-bottom: 40px;
        }

        &.light div.menu-texts {
            p, a p {
                color: #181818;
            }

            a:hover {
                text-decoration: underline #181818 2px;
            }
        }

        &.light {
            h2 {
                color: #181818;
            }
        }
    }

    
`;

const PathLinks = styled.div`
    display: flex;

    a:hover {
        cursor: pointer;
        text-decoration: underline white 2px;
    }

    p:nth-child(2) {
        padding-left: 12px;
    }
`; 

const AllProjs = styled.div`
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    padding-bottom: 100px;

    div {
        background-color: #afafaf;
        aspect-ratio: 1;
    }

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 490px) {
        grid-template-columns: 1fr;
    }
`;

export default AllProjectsPage;