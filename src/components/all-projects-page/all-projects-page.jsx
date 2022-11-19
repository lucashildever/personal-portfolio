import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";


function AllProjectsPage() {
    return(
        <PageContent>
            <div className="page-content">
                <PathLinks>
                    <Link to="/"><p>Home</p></Link>
                    <p>{" > Projects"}</p>
                </PathLinks>
                <h2>Projecs</h2>
                <AllProjs>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
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