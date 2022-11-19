import React from "react";
import styled from "styled-components";

function InfoBox({ children }) {

    return(
        <Box className="">
            <div>
                { children }
            </div>
        </Box>
    )
}

const Box = styled.div`
    position: fixed;
    bottom: 40px;
    display: flex;
    justify-content: center;
    width: 100%;

    & > div {
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(8px);
    }

    &.disable {
        visibility: hidden;
        transform: translateY(20px);
        transition: 1s;
    }
    
`;

export default InfoBox;