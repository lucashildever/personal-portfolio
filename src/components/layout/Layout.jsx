import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectMode } from "../../reducers/modeReducer";

import Icons from "../icons/icons";

function Layout() {

  const mode = useSelector(selectMode)

  return(
    <MyLayout className={mode ? "light" : "dark"} >
      <Icons />
      <Outlet />
    </MyLayout>
  )
}

const MyLayout = styled.div`
    min-height: 100vh;
    
    &.light {
      background-color: #D9D9D9;
    }
    &.dark {
      background-color: #181818;
    }
`;

export default Layout;