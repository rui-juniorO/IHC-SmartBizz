//Para propósitos de testes
import React from "react";
import SideNav from "../../components/nav-bar/nav";
import TopNav from "../../components/top-nav/nav";
import Main from "../main";

function Page() {
return (
  <>
  <TopNav/>
  <SideNav/>

  <Main/>
  </>
);
}

export default Page;