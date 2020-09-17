Array.prototype.uniq = function(){
    let arr = [];
    for (i = 0; i < this.length; i++)
    {
        if (!arr.includes(this[i])){
            arr.push(this[i]);
        }
    }
    return arr;
}


Array.prototype.twoSum = function(){
    let arr = [];
    for(i = 0; i < this.length; i++){
        for(j = 0; j < this.length; j++){
            if(i < j && this[i] + this[j] === 0){
                arr.push([i, j]);
            }
        }
    }
    return arr; 
}

//COME BACK TO THIS WHEN TA COMES
//also what exactly is node? ruby equivalent? 
Array.prototype.transpose = function(){
    let arr = [];
    for(i = 0; i < this[0].length; i++){
        let subArr = [];
        for (j = 0; j < this.length; j++){
            subArr.push(this[j][i]);
            //arr[i][j] = this[j][i];
        }
        arr.push(subArr);
    }
    return arr;
}

Array.prototype.myEach = function(callback){
    for(i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

// let arr = [1,2,4];

// arr.myEach(element => {
//     console.log(element)
// });

// arr.myEach(function(element){
//     console.log(element);
// }));

// function printToLog(element){
//     console.log
// }

Array.prototype.myMap = function(callback){
    let arr = [];
    this.myEach(arr.push(callback(element)));
    return arr;
}

// arr.myMap(element => {
//     element * 2;
// })