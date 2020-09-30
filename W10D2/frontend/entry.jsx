import React from "react"
import ReactDOM from "react-dom"
import Clock from "./clock"
import Tabs from "./tabs"
import Weather from "./weather"

const tabsArray = [{title: 'one', content: 'first tab'}, {title: 'two', content: 'second tab'}, {title: 'three', content: 'third tab'}];

function Root(){
    return (
        <div>
            <Clock/>
            <Tabs tabs={tabsArray}/>
            <Weather />
        </div>
    )
}


document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById('root');
    ReactDOM.render(<Root/>, root);
    // ReactDOM.render(<Tabs />, Root2);
})