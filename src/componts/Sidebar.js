import React from "react";
import Button from "./SidebarButton";
import { useState,useEffect } from "react";

export default function SideBar({isOpen, setIsOpen}) {
    const [ButtonState, setButtonState] = useState(Array(6).fill(false));
    function Handelclick(buttonNO) {
        const newIsOpen = ButtonState.slice();

        newIsOpen[buttonNO] = !newIsOpen[buttonNO];
        setButtonState(newIsOpen);
    }
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const checkScreenSize = () => {
        setIsSmallScreen(window.outerWidth < 480); // Adjust the width as needed
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
    });
    return (
        <>
        {isSmallScreen?isOpen?(<div className="h-screen  w-1/6 min-w-40 bg-indigo-200">
            <div className=" flex flex-col  duration-300  min-h-max overflow-y-auto w-full bg-indigo-200">
                <Button
                    value={"Apparels"}
                    buttonNO={0}
                    isOpen={ButtonState[0]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Accessories"}
                    buttonNO={1}
                    isOpen={ButtonState[1]}
                    onClick={Handelclick}
                />
                <Button
                    value={"HouseWare "}
                    buttonNO={2}
                    isOpen={ButtonState[2]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Others    "}
                    buttonNO={3}
                    isOpen={ButtonState[3]}
                    onClick={Handelclick}
                />
                <Button
                    value={"techniques"}
                    buttonNO={4}
                    isOpen={ButtonState[4]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Style"}
                    buttonNO={5}
                    isOpen={ButtonState[5]}
                    onClick={Handelclick}
                />
            </div>
        </div>):"":(<div className="h-screen  w-1/6 min-w-40 bg-indigo-200">
            <div className=" flex flex-col  duration-300  min-h-max overflow-y-auto w-full bg-indigo-200">
                <Button
                    value={"Apparels"}
                    buttonNO={0}
                    isOpen={ButtonState[0]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Accessories"}
                    buttonNO={1}
                    isOpen={ButtonState[1]}
                    onClick={Handelclick}
                />
                <Button
                    value={"HouseWare "}
                    buttonNO={2}
                    isOpen={ButtonState[2]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Others    "}
                    buttonNO={3}
                    isOpen={ButtonState[3]}
                    onClick={Handelclick}
                />
                <Button
                    value={"techniques"}
                    buttonNO={4}
                    isOpen={ButtonState[4]}
                    onClick={Handelclick}
                />
                <Button
                    value={"Style"}
                    buttonNO={5}
                    isOpen={ButtonState[5]}
                    onClick={Handelclick}
                />
            </div>
        </div>)}</>
    );
}
