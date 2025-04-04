import { Routes, Route } from "react-router-dom";
import Approute from "./Approute";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoardOfDirectorsPage from "./pages/BoardOfDirectorsPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactUsPage from "./pages/ContactUsPage";
import BuyNowPage from "./pages/BuyNow";

import LagosStatePage from "./pages/states/LagosStatePage"
import DeltaStatePage from "./pages/states/DeltaStatePage"

import IredePage from "./pages/estates/IredePage";
import BuckinghamPage from "./pages/estates/BuckinghamPage";
import HorizonPage from "./pages/estates/HorizonPage";
import ObibiPage from "./pages/estates/ObibiPage";
import DukePage from "./pages/estates/DukePage";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
      <Route path="/" element={<Approute />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="board-of-directors" element={<BoardOfDirectorsPage />} />
        <Route path="our-team" element={<OurTeamPage />} />
        <Route path="contacts" element={<ContactUsPage />} />
        <Route path="buynow" element={<BuyNowPage />} />

        <Route path="lagos-estate" element={<LagosStatePage />} />
        <Route path="delta-estate" element={<DeltaStatePage />} />


        <Route path="irede-estate" element={<IredePage />} />
        <Route path="buckingham-estate" element={<BuckinghamPage />} />
        <Route path="horizon-court" element={<HorizonPage />} />
        <Route path="obibi-eze-estate" element={<ObibiPage />} />
        <Route path="duke-and-duchess-estate" element={<DukePage />} />

      </Route>
    </Routes>
    </>
  );
};

export default App;
