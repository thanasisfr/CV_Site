import React from "react";
import "./LeftBar.css"

const LeftBar = () => {
    return(
        <div className="LeftBar h-screen w-1/5 divide-y divide-gray-300 text-center">
            <img className=" m-20"></img>
            <p className=" my-5"> Profile </p>
            <p className=" my-5"> Work Experience </p>
            <p className=" my-5"> Education </p>
            <p className=" my-5"> Skills </p>
        </div>
    )
}

export default LeftBar