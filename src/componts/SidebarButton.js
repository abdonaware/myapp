import { Transition } from "@headlessui/react";
import Button2 from "./NestedButton";

export default function Button({ value, buttonNO, isOpen, onClick }) {
    function onClick2() {}

    return (
        <>
            <button
                className={`flex justify-between mx-5 items-center font-semibold transition-colors m-1 ml-6 mb-0 duration-300 ${
                    isOpen ? "text-orange-500" : "text-black"
                }`}
                onClick={() => onClick(buttonNO)}
            >
                {value}
                <svg
                    className={`w-5 h-5 ml-16 items-end transition-transform duration-150 ${
                        isOpen ? "rotate-180 stroke-red-500" : "rotate-0 stroke-current"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 32 32"
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
                enter="transition-all duration-300"
                enterFrom="transform opacity-0 max-h-0"
                enterTo="transform opacity-100 max-h-screen"
                leave="transition-all duration-300"
                leaveFrom="transform opacity-100 max-h-screen"
                leaveTo="transform opacity-0 max-h-0"
            >
                <div className="flex flex-col p-2 bg-indigo-200 rounded overflow-hidden transition-all duration-500">
                    <Button2 value={"JOURNAL"} buttonNO={3} isOpen={false} onClick={onClick2} />
                    <Button2 value={"JOURNAL"} buttonNO={3} isOpen={false} onClick={onClick2} />
                    <Button2 value={"JOURNAL"} buttonNO={3} isOpen={false} onClick={onClick2} />
                    <Button2 value={"JOURNAL"} buttonNO={3} isOpen={false} onClick={onClick2} />
                    <Button2 value={"JOURNAL"} buttonNO={3} isOpen={false} onClick={onClick2} />
                </div>
            </Transition>
        </>
    );
}
