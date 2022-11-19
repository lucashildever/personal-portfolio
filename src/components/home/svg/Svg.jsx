import React from "react";
import styled from "styled-components";

function Svg() {
    return (
        <SvgDiv id="my-svg">
            <svg id="lh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g id="Camada_3"><polygon points="389.5 505 604.5 378 604.5 257.5 501 194.5 76 440.5 76 562.5 339 716.5 440 656.5 439 592.5 548 658.5 392 748.5 499 809.5 924 560.5 816 497.5 660 591.5 500 500.5 439 537.5 389.5 505" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="339" y1="586.5" x2="339" y2="716.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="439" y1="538.5" x2="439" y2="595.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="500" y1="500.5" x2="500" y2="628.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="660" y1="591.5" x2="660" y2="713.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="816" y1="497.5" x2="816" y2="622.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/><line x1="551" y1="658.5" x2="551" y2="779.5" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="11"/></g><polygon points="74 440.5 341 592.5 447 532.5 287 441.5 607 258.5 500 195.5 74 440.5" fill="#fff"/><polygon points="553 655.5 659 715.5 553 779.5 553 655.5" fill="#fff"/></svg>
        </SvgDiv>
    )
}

const SvgDiv = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    height: 100vh;
    left: 19vw;

    svg {

        height: 400px;
    }
`

export default Svg;