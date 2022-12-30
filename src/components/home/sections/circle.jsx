import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMode } from "../../../reducers/modeReducer";

export default function Circle() {

    const mode = useSelector(selectMode);

    return <MyCircle className={mode ? "light" : ""}></MyCircle>
}

const MyCircle = styled.div`
    z-index: 1;
    height: 200px;
    width: 200px;
    position: absolute;

    background: 
        radial-gradient(78.38% 82.01% at 82.71% 5.14%, 
            rgba(217, 217, 217, 0.7) 0%, 
            rgba(217, 217, 217, 0.35) 52.17%, 
            rgba(217, 217, 217, 0) 100%);

    border-radius: 50%;

    &.light {
        background: 
            radial-gradient(78.38% 82.01% at 82.71% 5.14%, 
                rgba(0, 0, 0, 0.7) 0%, 
                rgba(0, 0, 0, 0.35) 52.17%, 
                rgba(0, 0, 0, 0) 100%);
    }

`;
