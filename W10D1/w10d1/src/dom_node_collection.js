function DOMNodeCollection(array){
    this.array = array;
}

module.exports = DOMNodeCollection; 

DOMNodeCollection.prototype.html = function(str){
    if(str){
        this.array.forEach((node) =>{
            node.innerHTML = str;
        })
    }else{
        return this.array[0].innerHTML;
    }
}

DOMNodeCollection.prototype.empty = function(){
    this.array.forEach((node)=>{
        node.innerHTML = '';
    })
}

DOMNodeCollection.prototype.append = function(arg){
    if(arg instanceof HTMLElement){
        this.array.forEach((node)=>{
            node.innerHTML += arg.outerHTML;
        })
    }else if(arg instanceof DOMNodeCollection){
        let that = this;
        arg.array.forEach((argNode)=>{
            let newHTML = argNode.outerHTML;
            that.array.forEach((node)=>{
                node.innerHTML += newHTML;
            })
        })
    }else{
        this.array.forEach((node)=>{
            node.innerHTML += arg; 
        })
    }
}

DOMNodeCollection.prototype.attr = function(attribute, arg){
    if(arg){
        this.array.forEach((node)=>{
            node.setAttribute(attribute, arg);
        })
    }else{
        return this.array[0].getAttribute(attribute);
    }
}

DOMNodeCollection.prototype.addClass = function(arg){
    this.array.forEach((node)=>{
        node.classList.add(arg);
    })
}

DOMNodeCollection.prototype.removeClass = function(arg){
    this.array.forEach((node)=>{
        node.classList.remove(arg);
    })
}

DOMNodeCollection.prototype.children = function(){
    let childArr = [];
    this.array.forEach((node)=>{
        for(let i = 0; i<node.children.length; i++){
            childArr.push(node.children[i]);
        }
    });
    return new DOMNodeCollection(childArr); 
}

DOMNodeCollection.prototype.parent = function(){
    let parentArr = [];
    this.array.forEach((node)=>{
        parentArr.push(node.parentNode);
    });
    return new DOMNodeCollection(parentArr); 
}

DOMNodeCollection.prototype.find = function(selector){
    let matches = [];
    this.array.forEach((node) => {
        matches = matches.concat(Array.from(node.querySelectorAll(selector)));
    })
    return new DOMNodeCollection(matches);
}

DOMNodeCollection.prototype.remove = function(){
    this.array.forEach((node)=>{
        node.remove();
    })
}

DOMNodeCollection.prototype.on = function(event, cb){
    this.array.forEach((node)=>{
        node.cb = cb; 
        node.addEventListener(event, node.cb);
    })
}

DOMNodeCollection.prototype.off = function(event){
    this.array.forEach((node)=>{
        node.removeEventListener(event, node.cb);
    })
}