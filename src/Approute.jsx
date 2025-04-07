import { Outlet } from "react-router-dom";
import ScrollLinked from "./components/ScrollLinked";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Approute = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ScrollLinked />
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />

      <Outlet />
    </>
  );
};

export default Approute;
