import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProjData, selectProjData } from "../../reducers/projectsDataReducer";

import { setPage, selectPage } from "../../reducers/pageReducer";

import ProjDiv from "../proj-div/proj-div";

// router imports
import { useLocation } from "react-router-dom";



function AllProjectsPage() {

    const location = useLocation()
    
    const projectData = useSelector(selectProjData)

    const pageSelector = useSelector(selectPage)

    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://magenta-soap-production.up.railway.app/')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setProjData(data.data.allProjects))
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (location.pathname === "/projects") {
            dispatch(setPage("projects"))
        }
    }, [location])

    useEffect(() => {
        console.log(pageSelector)
    }, [pageSelector])

    return(
        <PageContent>
            <div className="page-content">
                <PathLinks>
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
                                    image={item.img} 
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
`;

export default AllProjectsPage;