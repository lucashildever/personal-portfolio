import React from "react";
import styled from "styled-components";

function BurguerMenu() {
    return (
        <Bmenu>
            {/* <span className="span-menu1"></span>
            <span className="span-menu2"></span>
            <span className="span-menu3"></span> */}
        </Bmenu>
    )
}

const Bmenu = styled.span`
    height: 50px;
    width: 50px;
    background-color: blue;
    span {
        height: 7px;
        width: 15px;
        background-color: #FFF;
    }
`;

export default BurguerMenu;