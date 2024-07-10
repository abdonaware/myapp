import React, { useState } from "react";
import Navbar from "./componts/navbar";
import SecNav from "./componts/SecondNav";
import SideBar from "./componts/Sidebar";
import Shop from "./pages/Shop";

export default function App() {
    const [isOpen, setIsOpen] = useState(Array(4).fill(false));
    return (
        <div className="w-screen">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SecNav />
            <div className="flex flex-row">
            <SideBar />
            {isOpen[0]?<Shop/>:" ffuuuu"}
            </div >
            
        </div >
    );
}
