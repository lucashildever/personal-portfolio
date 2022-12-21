import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../../../../reducers/sectionReducer";
import { selectMode } from "../../../../reducers/modeReducer";

import Circle from "../circle"

function Contact() {

    const dispatch = useDispatch()
    const mode = useSelector(selectMode)

    useEffect(() => {
        let obsFunc = entries => {
            entries.forEach((entry) => {
                if(entry.isIntersecting)
                        dispatch(setSection("contact"))
            });
        };

        let observer = new IntersectionObserver(obsFunc, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        observer.observe(document.getElementById("contact-form"));
    });

    return (
        <StyledContact>
            <div className="form-banner"><Circle /></div>
            <div className={`form-content ${mode ? "light" : ""}`}>
                <h2>Working on a project? <br/>Let’s have a coffe!</h2>
                <ContactForm id="contact-form">

                    <div className="form-item">
                        <input type="text" id="f-name" name="f-name" required/>
                        <label className="name-label" htmlFor="f-name">Name</label>
                    </div>
                    <div className="form-item">
                        <input type="text" id="f-email" name="f-email" required/>
                        <label className="email-label" htmlFor="f-email">Email</label>
                    </div>
                    <div className="form-item">
                        <input type="textarea" id="f-message" name="f-message" required/>
                        <label className="email-label" htmlFor="f-email">Message</label>
                    </div>

                </ContactForm>
                <div className="send-button">
                    <button>Send <ArrowSvg /></button>
                </div>
            </div>
        </StyledContact>
    )
}

function ArrowSvg() {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1774 0.75H15.0854L19.2434 6.06L15.0674 11.37H13.1774L16.5974 7.068C16.6334 7.02 16.6694 6.972 16.7054 6.924C16.7534 6.876 16.7954 6.828 16.8314 6.78H0.523438V5.34H16.8314C16.7834 5.28 16.7354 5.22 16.6874 5.16C16.6394 5.1 16.5854 5.04 16.5254 4.98L13.1774 0.75Z" fill="white"/>
        </svg>
    )
}

const StyledContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 400px;

    div.form-banner {
        height: 70px;
        width: 400px;
        overflow: hidden;

        & > div {
            transform: translate(240px, -25px);
        }
    }

    div.form-content {
        background-color: #D9D9D9;
        padding: 25px;

        h2 {
            color: #232323;
        }
    }

    div.light {
        background-color: #232323;

        h2 {
            color: #D9D9D9;
        }

        form {
            div.form-item label {
                color: #D9D9D9;
            }
            div.form-item input {
                border-bottom: #D9D9D9 solid 2px;

                &[type="text"], &[type="textarea"] {
                    color: #D9D9D9;
                }
            }
        }

        div.send-button button {
            color: #D9D9D9;
        }
    }

    div.send-button {
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;
        box-sizing: content-box;


        button {
            cursor: pointer;
            font-family: 'JetBrains Mono';
            font-style: normal;
            font-weight: 400;
            font-size: 0.38rem;
            color: #232323;
        }
    }

`;

const ContactForm = styled.form`
    padding-top: 15px;
    padding-bottom: 15px;

    div.form-item {
        position: relative;

        label {
            position: absolute;
            color: #232323;
            transition: 0.4s;
            transform: translate(-348px, 30px);
        }

        input:focus + label, input:valid + label {
            transition: 0.4s;
            transform: translate(-348px, 5px);
            opacity: 0.6;
        }

        input {
            height: 40px;
            background: transparent;
            border: none;
            border-bottom: #232323c0 solid 2px;

            &[type="text"], &[type="textarea"] {
                min-width: 100%;
                font-size: 0.38rem;
                padding: 4px;
                color: #232323;
            }
        } 
    }
`;

export default Contact;