import React, { useState } from "react";
import Navbar from "./componts/navbar";
import SecNav from "./componts/SecondNav";
import SideBar from "./componts/Sidebar";
import Shop from "./pages/Shop";

export default function App() {
    const [isOpen, setIsOpen] = useState([true,false,false,false]);
    const [SideBarStaute,setSideBarStaute]=useState(false)
    return (
        <div className="w-screen transition-all duration-300">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SecNav isOpen={SideBarStaute} setIsOpen={setSideBarStaute}/>
            <div className="flex flex-row w-full">
            {<SideBar isOpen={SideBarStaute} setIsOpen={setSideBarStaute}/>}
            {isOpen[0]?<Shop/>:" ffuuuu"}
            </div >
            
        </div >
    );
}
