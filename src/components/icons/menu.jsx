import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectMode } from "../../reducers/modeReducer";

function Menu() {
    
    const [menu, setMenu] = useState(false);

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
            <OpenMenu className={menu ? "" : "menu-disable"}>
                <div>
                    <h3>Language</h3>
                    <SquareRadio htmlFor="muhRadio4">
                        <label>
                            <input 
                                type="radio" 
                                name="muhRadio" 
                                value=""
                                defaultChecked
                            />
                                English
                        </label>
                    </SquareRadio>
                    <SquareRadio htmlFor="muhRadio4">
                        <label>
                            <input 
                                type="radio" 
                                name="muhRadio" 
                                value=""
                            />
                                Portuguese
                        </label>
                    </SquareRadio>
                </div>
            </OpenMenu>
        </>
    )
}

const Bmenu = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
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

    &.light div {
        background-color: #232323;
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
`;

const SquareRadio = styled.label`
    label {
        cursor: pointer;
    }

    input[type=radio] {
        border: 2px solid #fff;
        padding: 5px;
        -webkit-appearance: none;
        margin-right: 8px;
    }

    input[type=radio]:checked {
        background: url(data:image/gif;base64,R0lGODlhAQABAPAAAP///////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==) no-repeat center center;
        background-size: 6px 6px;
    }

    input[type=radio]:focus {
        outline-color: transparent;
    }
`;

export default Menu;