import React from "react";
import Button from "./SidebarButton";
import { useState } from "react";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(Array(6).fill(false));
    function Handelclick(buttonNO) {
        const newIsOpen = isOpen.slice();

        newIsOpen[buttonNO] = !newIsOpen[buttonNO];
        setIsOpen(newIsOpen);
    }
    return (
        <div className="h-screen w-1/6 bg-indigo-200">
            <div className=" flex flex-col  duration-300  min-h-max  w-full bg-indigo-200">
                <Button
                    value={"Apparels"}
                    buttonNO={0}
                    isOpen={isOpen[0]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Accessories"}
                    buttonNO={1}
                    isOpen={isOpen[1]}
                    onClick={Handelclick}
                />
                <Button
                    value={"HouseWare "}
                    buttonNO={2}
                    isOpen={isOpen[2]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Others    "}
                    buttonNO={3}
                    isOpen={isOpen[3]}
                    onClick={Handelclick}
                />
                <Button
                    value={"techniques"}
                    buttonNO={4}
                    isOpen={isOpen[4]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Style"}
                    buttonNO={5}
                    isOpen={isOpen[5]}
                    onClick={Handelclick}
                />
            </div>
        </div>
    );
}
