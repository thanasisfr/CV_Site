import React from "react";
import { Section, Navigation, LeftBar, Footer } from "./CV_example";
import "./App.css"

const App = () => {
    return(
        <div className="App flex flex-row w-screen">
            <LeftBar />
            <div className="flex flex-col divide-y-2 divide-gray-300 w-4/5">
                <h1 className="w-full text-center h-1/5"> General Info here</h1>
                <Section name="Profile"/>
                <Section name="Work Experience"/>
                <Section name="Education"/>
                <Section name="Skills"/>
            </div>
        </div>
    )
}
export default App

/*state = {data: null};
    
    componentDidMount(){
        this.callBackendAPI()
            .then(res => this.setState({data:res.express}))
            .catch(err => console.log(err));
    }

    callBackendAPI = async() => {
        const response = await fetch('/test');
        const body = await response.json();

        if(response.status != 200){
            throw Error(body.message)
        }
        return body;
    } 
*/