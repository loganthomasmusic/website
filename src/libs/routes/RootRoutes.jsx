import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
