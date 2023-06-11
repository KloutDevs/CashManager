import React from "react";

import AppBar from "../../components/appBar";

function AppLayout({ children }) {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}

export default AppLayout;
