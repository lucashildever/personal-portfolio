import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjDiv = ({ title, image, projType, linkTo }) => {

    const link = `projects/${linkTo}`;
    
    return(
        <Link to={link}>
            <StyledProjItem image={ image }>
                <h4>{ title }</h4>
                <h5>{ projType }</h5>
                <span></span>
            </StyledProjItem>
        </Link>
    )
}

const StyledProjItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    background-image: url(${({ image }) => image ? image : ''});
    background-position: center;
    background-size: 130%;
    padding: 15px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    span {
        opacity: 0;
        z-index: 1;
        position: absolute;
        height: 400px;
        width: 400px;
        transform: translate(-15px, 15px);
        transition: 0.3s ease-in-out;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0.8099614845938375) 0%, rgba(0,0,0,0.4009978991596639) 22%, rgba(0,0,0,0) 47%);        transition: 0.3s ease-in-out;
    }

    h4, h5 {
        z-index: 2;
        transform: translateY(3px);
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    &:hover {
        background-size: 135%;

        h4, h5 {
            transform: translateY(-3px);
            opacity: 1;
        }

        span {
            opacity: 1;
        }
    }

`;

export default ProjDiv;