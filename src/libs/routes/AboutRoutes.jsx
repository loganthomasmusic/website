import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../pages";

export const AboutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
    </Routes>
  );
};
