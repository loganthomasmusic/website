import React from "react";
import { Route, Routes } from "react-router-dom";
import { LayoutWrapper } from "../templates";

import { RootRoutes } from "./RootRoutes";
import { AboutRoutes } from "./AboutRoutes";
import { MusicRoutes } from "./MusicRoutes";
import { ContactRoutes } from "./ContactRoutes";
import { useLayoutContainer } from "../hooks";

export const AppRouter = () => {
  const { handleMenuClick } = useLayoutContainer();
  const layoutWrapperProps = {
    img_uri: "/img/ico/logo.ico", // TODO - Icon is cut off, replace logo with better icon
    menuItems: [
      { Menu: "Home", link: "/" },
      { Menu: "About", link: "/about" },
      { Menu: "Music", link: "/music" },
      { Menu: "Contact", link: "/contact" },
    ],
    handleMenuClick,
  };

  const LayoutWrapperWithProps = ({ children }) => (
    <LayoutWrapper {...layoutWrapperProps}>{children}</LayoutWrapper>
  );

  return (
    <>
      <Routes>
        <Route
          path="/about"
          element={
            <LayoutWrapperWithProps>
              <AboutRoutes />
            </LayoutWrapperWithProps>
          }
        />
        <Route
          path="/music"
          element={
            <LayoutWrapperWithProps>
              <MusicRoutes />
            </LayoutWrapperWithProps>
          }
        />
        <Route
          path="/contact"
          element={
            <LayoutWrapperWithProps>
              <ContactRoutes />
            </LayoutWrapperWithProps>
          }
        />
        <Route
          path="/"
          element={
            <LayoutWrapperWithProps>
              <RootRoutes />
            </LayoutWrapperWithProps>
          }
        />
      </Routes>
    </>
  );
};
