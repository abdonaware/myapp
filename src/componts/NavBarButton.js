export default function Button({ value, buttonNO, isOpen, onClick }) {
    return (
        <button
            className={`flex items-center font-semibold transition-colors m-3 duration-300 ${
                isOpen ? "text-orange-500" : "text-black"
            }`}
            onClick={() => onClick(buttonNO)}
        >
            {value}
            <svg
                className={`w-5 h-5 ml-2 transition-transform duration-150 ${
                    isOpen
                        ? "rotate-180 stroke-red-500"
                        : "rotate-0 stroke-current"
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
    );
}
