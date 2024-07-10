import NavbarButton from "./NavBarButton";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import User from "./UserNAV";
import logo from "./user.jpg";

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
        image: logo,
    };

    return (
        <>
            <div className=" flex w-full  min-w-max bg-indigo-50 shadow-md">
                <span className=" m-8 my-auto mx-10 text-2xl font-semibold">
                    Logo
                </span>
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
                <span className="flex flex-row-reverse w-full">
                    <button className="flex items-center m-5 rounded-full hover:bg-gray-300 transition-colors">
                        <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="flex items-center m-5 rounded-full hover:bg-gray-300 transition-colors">
                        <HeartIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="flex items-center m-5 ml-10 rounded-full hover:bg-gray-300 transition-colors">
                        <SearchIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <User userInformation={user} />
                </span>
            </div>
        </>
    );
}
