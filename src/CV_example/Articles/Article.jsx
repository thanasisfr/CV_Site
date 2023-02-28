import React from "react";
import "./Article.css";
import {Education} from "./Education";
import {Profile} from "./Profile";
import {WorkExperience} from "./WorkExperience";
import {Skills} from "./Skills";

export function Article(page){
    if(page == "Profile"){
        return <Profile />;
    }else if(page == "Work Experience"){
        return <WorkExperience />;
    }else if(page == "Education"){
        return <Education />;
    }else if(page == "Skills"){
        return <Skills />;
    }else{
        return (
            <div className="Article text-center">
                <p>Error Page. Shouldn't happen</p>
            </div>
        )
    }
}