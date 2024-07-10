import NavbarButton from "./NavBarButton";
import { useState, useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import User from "./UserNAV";
import picuter from "./user.jpg";
import logo from "./logo.svg";
import Button from "./MobileNavbarButton";

export default function Navbar({ isOpen, setIsOpen }) {
    function Handelclick(buttonNO) {
        const newIsOpen = isOpen.slice();
        for (let i = 0; i < 4; i++) {
            if (i === buttonNO) {
                newIsOpen[i] = true;
            } else {
                newIsOpen[i] = false;
            }
        }
        setIsOpen(newIsOpen);
    }

    let user = {
        name: "ahmed",
        image: picuter,
    };
    const [isSmallScreen, setIsSmallScreen] = useState(true);

    const checkScreenSize = () => {
        setIsSmallScreen(window.outerWidth > 700); // Adjust the width as needed
    };
    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
    });
    return (
        <>
            <div className=" flex w-full  min-w-max bg-indigo-50 shadow-md">
                <span className=" m-3 my-auto mx- text-2xl font-semibold">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-10 h-10 rounded-full"
                    ></img>
                </span>

                {isSmallScreen ? (
                    <>
                        <NavbarButton
                            value={"SHOP"}
                            buttonNO={0}
                            isOpen={isOpen[0]}
                            onClick={Handelclick}
                        />
                        <NavbarButton
                            value={"FABRIC"}
                            buttonNO={1}
                            isOpen={isOpen[1]}
                            onClick={Handelclick}
                        />
                        <NavbarButton
                            value={"JOURNAL"}
                            buttonNO={2}
                            isOpen={isOpen[2]}
                            onClick={Handelclick}
                        />
                        <NavbarButton
                            value={"ABOUT"}
                            buttonNO={3}
                            isOpen={isOpen[3]}
                            onClick={Handelclick}
                        />
                    </>
                ) : (
                    <Button pageVeiw={isOpen} setpageVeiw={setIsOpen} handleClick={{Handelclick}} />
                )}
                <span className="flex flex-row-reverse w-full">
                    <button className="flex items-center m-2 sm:m-5 rounded-full hover:bg-gray-300 transition-colors">
                        <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="flex items-center m-2 sm:m-5 rounded-full hover:bg-gray-300 transition-colors">
                        <HeartIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="flex items-center m-2 sm:m-5 ml-5 sm:ml-1010 rounded-full hover:bg-gray-300 transition-colors">
                        <SearchIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <User userInformation={user} />
                </span>
            </div>
        </>
    );
}
