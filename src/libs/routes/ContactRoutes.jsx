import { Routes, Route } from "react-router-dom";
import { ContactPage } from "../pages";

export const ContactRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ContactPage />} />
    </Routes>
  );
};
