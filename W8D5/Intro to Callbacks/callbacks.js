//clock
class Clock {
    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        this._tick = this._tick.bind(this);
        setInterval(this._tick, 1000);
    }

    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(time);
    }

    _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                if(this.hours === 24){
                    this.hours = 0;
                }
            }
        }
        this.printTime();
    }
}

// const clock = new Clock();

//addNumbers

const readline = require('readline');
reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback){
    if(numsLeft > 0){
        reader.question('Please enter a number', (res)=>{
            let number = parseInt(res);
            sum += number;
            console.log(`Partial Sum: ${sum}`);
            addNumbers(sum, numsLeft-1, completionCallback);
        })
    }
    else if(numsLeft === 0){
        completionCallback(sum);
        reader.close();
    }
    
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

//absurdBubbleSort

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
        if (res === "yes") {
            callback(true); 
        } else {
            callback(false);
        }
        // reader.close();  don't put it here bc it will close after asking the question one time
    });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if(i < arr.length-1){
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan)=>{
            if(isGreaterThan === true){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];    
                madeAnySwaps = true;   
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
        });
    }   
    else if(i === arr.length-1){
        outerBubbleSortLoop(madeAnySwaps);
    }
}
  
function absurdBubbleSort(arr, sortCompletionCallback) {
    
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }

    outerBubbleSortLoop(true);
}

// absurdBubbleSort([1,2,3], function(arr) {
// console.log("Sorted array: " + JSON.stringify(arr));
// reader.close();
// });

// myBind

Function.prototype.myBind = function (context) {
    return () => this.apply(context);
    // let that = this;
    // return function () {that.apply(context)}
};

// test:
// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function () {
//     console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// console.log(turnOn()); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

//myThrottle

Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    return ()=>{
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false;
            } , interval);
            this();
        }
    }
};

// //test:
// class Neuron {
//     fire() {
//         console.log("Firing!");
//     }
// }

// const neuron = new Neuron();

// neuron.fire = neuron.fire.myThrottle(5000);

// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);


// // If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }

//myDebounce

Function.prototype.myDebounce = function(interval){
    let tooSoon = true;
    return () => {
        if (tooSoon) {
            tooSoon = false;
            setTimeout(() => {
                tooSoon = true;
            }, interval);
            this();
        }
    }
}

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();
searchBar.search = searchBar.search.myDebounce(500);

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

queryForHelloWorld();

