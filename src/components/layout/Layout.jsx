import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import IconsMenu from "../icons-menu/icons-menu";



function Layout() {
    return(
    <MyLayout>
      <IconsMenu />
      <Outlet />
    </MyLayout>
    )
}

const MyLayout = styled.div`
    background-color: #181818;
    min-height: 100vh;
`;

export default Layout;