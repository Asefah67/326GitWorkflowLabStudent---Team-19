

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    return Math.sqrt(value);
//new line
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return Math.pow(value, 2)
}

// TODO: FIX reciprocal function
function calculateReciprocal() {
    if (value === 0) {
        return "Undefined (cannot divide by zero)";
    }
    return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
    return Math.log(value);
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
    let rad_val = value * Math.PI/180;

    return Math.sin(rad_val)
}

// TODO: Implement cosine function
function cosine(value) {
    return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
    return Math.tan(value);
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal
};
