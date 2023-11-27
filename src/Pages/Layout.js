import ThemeProvider from "react-bootstrap/ThemeProvider";
// import { Children } from 'react';

import Header from "../Components/Layout/Header";
import Content from "../Components/Layout/Content";
import Footer from "../Components/Layout/Footer";
import SideBar from "../Components/Layout/SideBar";
import { Outlet } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useContext } from "react";
import ErrorContext from "../context/error-context";

function Layout({ Children }) {
 const errCtx= useContext(ErrorContext);
 return (
    <>
      <ThemeProvider>
        <div className="wrapper">
          <Header />
          <SideBar />
          <Content>
          <Alert variant="success"></Alert>
          {errCtx.successMsg && <Alert variant="success">{errCtx.successMsg}</Alert>}
          {errCtx.errorMsg && <Alert variant="danger">{errCtx.errorMsg}</Alert>}
          {errCtx.infoMsg && <Alert variant="primary">{errCtx.infoMsg}</Alert>}
            <Outlet />
          </Content>
          <Footer />
          <aside className="control-sidebar control-sidebar-dark"></aside>
        </div>
      </ThemeProvider>
    </>
  );
}

export default Layout;
