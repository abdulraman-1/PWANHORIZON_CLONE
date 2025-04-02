import { Routes, Route } from "react-router-dom";
import Approute from "./Approute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import OurTeamPage from "./pages/OurTeamPage";
import HousePage from "./pages/HousePage";
import ContactUsPage from "./pages/ContactUsPage";

import LagosStatePage from "./pages/states/LagosStatePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Approute />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="board-of-directors" element={<BoardOfDirectorsPage />} />
        <Route path="our-team" element={<OurTeamPage />} />
        <Route path="house" element={<HousePage />} />
        <Route path="contacts" element={<ContactUsPage />} />
        <Route path="lagos-estate" element={<LagosStatePage />} />
      </Route>
    </Routes>
  );
};

export default App;
