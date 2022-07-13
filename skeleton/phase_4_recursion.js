function range(start, end) {
    if (start === end) {
        return [start]
    }
    return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.pop() + sumRec(arr);
}

// function exponent(base, exp) {
//     if (exp === 0) {
//         return 1;
//     }
//     return base * exponent(base, exp - 1);
// }

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp > 0) {
        return base * exponent(base, exp - 1);
    } else {
        return 1/ (base * exponent(base, exp + 1));
    }
}   

function fibonacci(n) {
    if (n === 1) return [1];
    const fibs = fibonacci(n - 1); 
    fibs.push(fibs[fibs.length - 1]);
    return fibs;
}
