Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) { // i = 0; this[0] = 1
        callback(this[i]);
    }
}

function timesTwo(n) {
    return n * 2;
}

function logElement(el) {
    console.log(el);
}

const arr = [1, 2, 3];

arr.myEach(logElement);

 
// [1, 2, 3].myMap(doubleElement);
Array.prototype.myMap = function(callback) {
    const result = [];
    
    function myAnonFunc(el) {
        result.push(callback(el));
    };
    
    this.myEach(myAnonFunc);
    return result;
}

// function doubleElement(el) {
//     return el * 2;
// }

// const arr = [1, 2, 3];

// console.log(arr.myMap(doubleElement))


Array.prototype.myReduce = function(callback, initialValue) {
    initialValue ||= this.shift();

    this.myEach(function(el) {
        initialValue = callback(initialValue, el);
    })
    return initialValue;
}

function inject(acc, el) {
    return acc + el;
}

// const arr = [1, 2, 3];

// console.log(arr.myReduce(inject))

