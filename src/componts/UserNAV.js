import React from "react";

export default function User({ userInformation }) {
    return (
        <div className="flex items-center space-x-4 ">
            <span className="text-lg font-thin ">
                {userInformation.name}
            </span>

            <img
                src={userInformation.image}
                alt={userInformation.name}
                className="w-10 h-10 rounded-full"
            />
        </div>
    );
}
