import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Approute from "./Approute";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Approute />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
