import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const Approute = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Sidebar isOpen={isOpen}/>

        <Outlet />
    </>
  )
}

export default Approute