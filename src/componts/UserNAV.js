import React ,{useEffect}from "react";
import { useState } from "react";
export default function User({ userInformation }) {
    const [isSmallScreen, setIsSmallScreen] = useState(true);
    
        const checkScreenSize = () => {
            setIsSmallScreen(window.outerWidth > 480); // Adjust the width as needed
        };
        useEffect(() => {
            checkScreenSize();
            window.addEventListener("resize", checkScreenSize);
        });
    return (
        <div className="flex items-center space-x-2 sm:space-x-4 ">
            <span className="text-lg font-thin ">
                {userInformation.name}
            </span>

            {isSmallScreen?(<img
                src={userInformation.image}
                alt={userInformation.name}
                className="w-10 h-10 rounded-full"
            />):" "}
        </div>
    );
}
