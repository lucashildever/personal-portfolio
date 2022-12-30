import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMode } from "../../reducers/modeReducer";

function Menu() {
    
    const [menu, setMenu] = useState(false);

    const [lang, setLang] = useState(false)

    const mode = useSelector(selectMode);

    return (
        <>
            <Bmenu 
                onClick={() => setMenu(!menu)}
                className={`${menu ? "b-menu-x" : ""} ${mode ? "light" : ""}`}
            >
                <div></div>
                <div></div>
                <div></div>
            </Bmenu>
            <OpenMenu className={`${menu ? "" : "menu-disable"} ${mode ? "light" : ""}`}>
                <div className="menu-content">
                    <h3>Language</h3>
                    <SquareRadios className={`${mode ? "light" : ""}`}>
                        <div 
                            onClick={() => {
                                if(!lang)
                                    setLang(!lang)
                                }}
                        >
                            <input className={lang ? "active-op" : ""} name="english" type="radio" value="" defaultChecked />
                            <label for="english">English</label>
                        </div>
                        <div 
                            onClick={() => {
                                if(lang)
                                    setLang(!lang)
                                }}
                        >
                            <input className={lang ? "" : "active-op"} name="portuguese" type="radio" value=""/>
                            <label for="portuguese">Portuguese</label>
                        </div>
                    </SquareRadios>
                </div>
            </OpenMenu>
        </>
    )
}

const Bmenu = styled.div`
    position: fixed;
    top: 16px;
    right: 13px;
    cursor: pointer;
    opacity: 0.6;
    width: 25px;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        height: 4px;
        width: 15px;
        background-color: #D9D9D9;
        border-radius: 1px;
        transition: 0.6s ease-out;
    }

    &:hover {
        transition: 0.2s;
        opacity: 1;
    }
    
    
    div:nth-child(2) {
        margin-top: 2px;
        margin-bottom: 2px;
    }

    &.b-menu-x {
        opacity: 1;
        
        div:nth-child(2) {
            opacity: 0;
            display: hidden;
        }
        div:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
        }
        div:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
        }
    }

    &.light {
        div {
            background-color: #232323;
        }
    }
`;

const OpenMenu = styled.div`
    display: flex;
    align-items: center;
    z-index: 2;
    position: fixed;
    right: 10px;
    top: 10px;

    div h3 {
        font-weight: 800;
        padding-top: 35px;
        padding-bottom: 12px;
    }
    
    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: 0.6s ease-out;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(8px);
        height: calc(100vh - 20px);
        width: 20vw;

        label, h3 {
            transform: translateY(-5px);
            opacity: 1;
            transition: 0.2s;
            transition-delay: 0.3s;
        }

    }

    &.menu-disable {
        & > div {
            width: 0vw;
            transition-delay: width 0.2s;

            label, h3 {
                transform: translateY(5px);
                opacity: 0;
                transition: 0.2s;
            }
        }
    }

    &.light {
        div.menu-content h3 {
            color: #232323;
        }
    }

    //responsive
    @media screen and (max-width: 900px) {
        & > div {
            width: 300px;
        }
    }

    @media screen and (max-width: 500px) {
        & > div {
            width: calc(100vw - 20px);
        }

        div h3 {
            font-size: 8vw;
        }
    }
`;

const SquareRadios = styled.form`
    div label {
        cursor: pointer;
        line-height: 24px;
    }

    div input[type=radio] {
        border: 2px solid #D9D9D9;
        padding: 5px;
        -webkit-appearance: none;
        margin-right: 8px;
    }

    div input[type=radio].active-op::after {
        content: "";
        position: absolute;
        opacity: 1;
        width: 6px;
        height: 6px;
        transform: translate(-4px, -4px);
        background-color: #D9D9D9;
    }

    /* div input[type=radio]:not(:checked)::after {
        opacity: 0;
    } */

    /* 

    

    input[type=radio]:checked ~ input[type=radio]::after {
        opacity: 1;
    }

    input[type=radio]:focus {
        outline-color: transparent;
    }

    &.light {
        label {
            color: #232323;
        }

        input[type=radio] {
            border: 2px solid #232323;
        }

        input[type=radio]:checked ~ input[type=radio]:after {
            background-color: #232323;
        }
    } */

`;

export default Menu;