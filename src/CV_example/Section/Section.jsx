import React from "react";
import "./Section.css";
import {Article} from "../Articles/Article";

const Section = (props) => {
    return(
        <div className="Section w-full h-1/5">
            <h1 className="headLine text-center m-0 p-0"> {props.name} </h1>
            {Article(props.name)}
        </div>
    )
}

export default Section