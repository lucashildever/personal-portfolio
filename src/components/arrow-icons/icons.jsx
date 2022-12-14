import React from "react";
import styled from "styled-components";

export function Arrow() {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.285 0.75H14.977L19.189 6.06L14.959 11.37H13.285L16.741 7.068C16.789 7.008 16.837 6.948 16.885 6.888C16.945 6.828 17.005 6.762 17.065 6.69H0.576968V5.43H17.047C16.987 5.358 16.927 5.286 16.867 5.214C16.807 5.142 16.741 5.064 16.669 4.98L13.285 0.75Z" fill="white"/>
        </svg>
    )
}

export function SecondArrow() {
    return (
        <StyledSecondArrow width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.87397 5.05674L11.0704 3.86031L17.8035 4.63672L18.5671 11.3825L17.3834 12.5662L16.7852 7.08048C16.7767 7.00411 16.7683 6.92774 16.7598 6.85137C16.7598 6.76652 16.7555 6.67743 16.747 6.58409L5.08827 18.2429L4.19732 17.3519L15.8434 5.70586C15.75 5.69738 15.6567 5.68889 15.5633 5.68041C15.47 5.67192 15.3682 5.66344 15.2579 5.65495L9.87397 5.05674Z" fill="white"/>
        </StyledSecondArrow>
    )
}

const StyledSecondArrow = styled.svg`
    transform: translate(5px, 1px);
    position: absolute;
`;