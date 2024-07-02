import { Routes, Route } from "react-router-dom";
import { MusicPage } from "../pages";

export const MusicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicPage />} />
    </Routes>
  );
};
