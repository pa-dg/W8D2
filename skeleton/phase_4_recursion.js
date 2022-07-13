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

function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp - 1);
}

