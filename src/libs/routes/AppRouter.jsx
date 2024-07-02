import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LayoutWrapper } from "../components";

import { RootRoutes } from "./RootRoutes";
// import AboutRoutes from "./AboutRoutes";
// import MusicRoutes from "./MusicRoutes";
// import ContactRoutes from "./ContactRoutes";

export const AppRouter = () => {
  const layoutWrapperProps = {
    img_uri: "https://via.placeholder.com/150",
    menuItems: [
      { Menu: "Home", link: "/" },
      { Menu: "About", link: "/about" },
      { Menu: "Music", link: "/music" },
      { Menu: "Contact", link: "/contact" },
    ],
  };

  const LayoutWrapperWithProps = ({ children }) => (
    <LayoutWrapper {...layoutWrapperProps}>{children}</LayoutWrapper>
  );

  return (
    <Router>
      <Routes>
        {/* <Route path="/about" element={<AboutRoutes />} />
        <Route path="/music" element={<MusicRoutes />} />
        <Route path="/contact" element={<ContactRoutes />} /> */}
        <Route
          path="/"
          element={
            <LayoutWrapperWithProps>
              <RootRoutes />
            </LayoutWrapperWithProps>
          }
        />
      </Routes>
    </Router>
  );
};
