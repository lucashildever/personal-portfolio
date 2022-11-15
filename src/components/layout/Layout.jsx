import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";



function Layout() {
    return(
    <MyLayout>
      <Outlet />
    </MyLayout>
    )
}

const MyLayout = styled.div`
    background-color: grey;
`;

export default Layout;