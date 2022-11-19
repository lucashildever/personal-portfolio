import React from "react";
import styled from "styled-components";

function Contact() {
    return (
        <StyledContact>
            <h2>Working on a project? <br/>Let’s have a coffe!</h2>
            <ContactForm id="contact-form">
                <label htmlFor="fname">Name</label>
                <input type="text" id="fname" name="fname"/>
                <label htmlFor="femail">Email</label>
                <input type="text" id="femail" name="femail"/>
                <label htmlFor="fmessage">Message</label>
                <textarea id="fmessage" name="fmessage"/>
            </ContactForm>
            <div>
                <button>Send <ArrowSvg /></button>
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

    h2 {
        margin-bottom: 35px;
    }

    input {
        background-color: none;
    }

    div {
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
            color: white;
        }
    }

`;

const ContactForm = styled.form`
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.2fr 1fr 1.2fr 3.5fr;
    height: 280px;
    
    label {
        font-family: 'JetBrains Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 0.38rem;
        color: white;

        display: flex;
        align-items: center;

        &[for="fname"] {
            grid-column-start: 1;
            grid-column-end: 2;
        }
    }

    input {
        background-color: #515151;
        color: white;
        font-size: 0.38rem;

        &[id="fname"] {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
        }
    }
    
    textarea {
        color: white;
        font-size: 0.38rem;
        background-color: #515151;
        
        grid-column-start: 1;
        grid-column-end: 3;
        resize: none;

    }

    input, textarea {
        padding: 10px;
    }

`;

export default Contact;