function Sum() {
    let args = Array.from(arguments);
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    };

    return sum;
};

// console.log(Sum(1, 2, 3, 4) === 10);
// console.log(Sum(1, 2, 3, 4, 5) === 15);

function Sum2(...args) {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    };

    return sum;
};

// console.log(Sum2(1, 2, 3, 4) === 10);
// console.log(Sum2(1, 2, 3, 4, 5) === 15);


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind = function() {
    let that = this;
    let args = Array.from(arguments);
    let context = args.shift();
    
    return function() {
        let callArgs = Array.from(arguments);
        that.apply(context, args.concat(callArgs));
    }
};

// Option 2 (using rest operators)
Function.prototype.myBind2 = function(...args) {
    let context = args.shift();
    
    return (...callArgs) => {
        this.apply(context, args.concat(callArgs));
    }
};

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs){
    const numbers = [];
    let sum = 0;
    return function _curriedSum(num){
        numbers.push(num);
        if(numbers.length === numArgs){
            numbers.forEach(ele => {
                sum += ele;
            })
            return sum;
        }
        else {
            return _curriedSum;
        }
    }
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Option 1 (using spread operator)
Function.prototype.myCurry = function(numArgs){
    const args = [];
    let prevFunc = this;
    return function _curried(element){
        args.push(element);
        if(args.length < numArgs){
            return _curried;
        }
        else {
            return prevFunc(...args);
        }
    }
}
// Option 2 (using apply)
Function.prototype.myCurry2 = function(numArgs){
    const args = [];
    let prevFunc = this;
    return function _curried(element){
        args.push(element);
        if(args.length < numArgs){
            return _curried;
        }
        else {
            return prevFunc.apply(null, args);
        }
    }
}

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }

let f1 = sumThree.myCurry2(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
console.log(f1 = f1(6)); // = 30