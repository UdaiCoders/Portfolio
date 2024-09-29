import React from "react";

import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const BaseLayout = ({ Children }) => {
  return (
    <>
    <div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Sidebar />
      <div class="content-wrapper">{Children}</div>
      <Footer/>
      </div>
      </div>
    </>
  );
};

export default BaseLayout;
