Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

// function logElement(el) {
//     console.log(el);
// }

// const arr = [1, 2, 3];

// arr.myEach(logElement);

 
Array.prototype.myMap = function(callback) {
    const result = [];
    
    // function(callback) {
    //     result.push(this.myEach(callback));
    //     return result;
    // }
    this.myEach(function(el) {
        result.push(callback(el))
    })
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

const arr = [1, 2, 3];

console.log(arr.myReduce(inject))

