import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMode, selectMode } from "../../reducers/modeReducer";

import Menu from "./menu";
import ModeIcon from "./mode-icon";

function Icons() {

    const dispatch = useDispatch()
    const mode = useSelector(selectMode)

    React.useEffect(()=> {console.log(mode)}, [mode])

    return(
        <>
            <Menu />
            <ModeIcon onClick={() => dispatch(setMode(!mode))}/>
        </>

    )
}

export default Icons;