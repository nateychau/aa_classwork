const DOMNodeCollection = require("./dom_node_collection");

window.callbackQueue = [];
function $l(arg){
    // this.queue = this.queue || [];
    if(typeof arg === 'function'){
        if(document.readyState === 'complete'){
            arg();
        }else{
            window.callbackQueue.push(arg);
            document.addEventListener("DOMContentLoaded", (event)=>{
                window.callbackQueue.forEach((fn)=>{
                    fn();
                })
            })
        }         
    }else{
        let nodeList;
        if(arg instanceof HTMLElement){
        // debugger;
            nodeList = [arg];
        }else{
        nodeList = document.querySelectorAll(arg);
        }
        let nodeArray = Array.from(nodeList);
        return new DOMNodeCollection(nodeArray)
    }

    this.extend(...args){
        let first = args[0];

    }
}



window.$l = $l;
window.DOMNodeCollection = DOMNodeCollection;