import React from "react";
import styled from "styled-components";

function Menu() {
    return (
        <Bmenu>
            <div className="div-menu1"></div>
            <div className="div-menu2"></div>
            <div className="div-menu3"></div>
        </Bmenu>
    )
}

const Bmenu = styled.div`
    position: fixed;
    top: 20px;
    right: 2vw;
    cursor: pointer;
    opacity: 0.6;
    width: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 35px;

    &:hover {
        transition: 0.2s;
        opacity: 1;
    }
    
    div {
        height: 4px;
        width: 15px;
        background-color: #ffffff;
    }
    
    div.div-menu2 {
        margin-top: 2px;
        margin-bottom: 2px;
    }
`;

export default Menu;