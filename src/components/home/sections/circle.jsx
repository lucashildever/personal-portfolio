import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function Circle({ absolute }) {
    const [circle, setCircle] = useState({})

    useEffect(() => {
        setInterval(()=> {
            const first = Math.floor(Math.random() * 80) + 40;
            const second = Math.floor(Math.random() * 80) + 40;
            const third = Math.floor(Math.random() * 80) + 40;
            const fourth = Math.floor(Math.random() * 80) + 40;
            setCircle({
                "first": first,
                "second": second,
                "third": third,
                "fourth": fourth
            })
        }, 3000)   
    },[])

    return <MyCircle circle={circle} absolute={absolute} className="circle"></MyCircle>
}

const MyCircle = styled.div`
    z-index: 1;
    height: 200px;
    width: 200px;
    ${({ absolute }) => absolute ? "position: absolute;" : ""}

    background: 
        radial-gradient(74.21% 73.53% at 64.51% 26.64%, 
        rgba(190, 190, 190, 0.6) 0%, 
        rgba(217, 217, 217, 0.402037) 38.54%, 
        rgba(217, 217, 217, 0) 89.58%);

    border-radius: 50% 50% 50% 50%;

    border-radius: ${({ circle }) => 
        circle.first + "%" + circle.second + "%" + circle.third + "%" + circle.fourth + "%"};
    transition: 7s ease-out;
`;
