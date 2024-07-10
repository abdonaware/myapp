import React, { useState } from "react";
import { Transition } from "@headlessui/react";

export default function SecNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [onUse, setOnUse] = useState(0);
    const sortArray = ["price", "added date", "new arrived"];

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    const list_click = (buttonNo) => {
        setOnUse(buttonNo);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="relative flex flex-row-reverse justify-around bg-indigo-100">
            <div className="flex flex-row">
                <span className="m-4 ">Sort by</span>
            <div className="flex flex-col items-start my-auto mr-10 relative">
                <button
                    onClick={onClick}
                    className="flex items-center border text-black border-black px-4 py-2 rounded transition duration-300"
                >
                    <span>{sortArray[onUse]}</span>
                    <svg
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>
                <Transition
                    show={isOpen}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="absolute z-10 right-0 mt-12 w-max bg-gray-100 border rounded shadow-lg"
                >
                    <div className="flex flex-col p-2">
                        {sortArray.map((option, index) => (
                            <button
                                key={index}
                                className={`py-1 px-2 hover:bg-gray-200 ${
                                    index === onUse ? "bg-gray-200" : ""
                                }`}
                                onClick={() => list_click(index)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </Transition>
            </div>
            </div>
            <span className="m-4">Women</span>
        </div>
    );
}
