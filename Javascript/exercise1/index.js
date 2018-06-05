/**
 * @param {Number} a Первое слагаемое
 * @param {Number} b Второе слагаемое
 * @returns {Number}
 */
module.exports = function (a, b) {
    sum = 0
    if (typeof(a) == 'number' && typeof(b)=='number' ){
        sum = a+b;
    }
    else if (typeof(a) == 'string' || typeof(b)=='string') {
        if (isNaN(a) || isNaN(b)) {
            return NaN;
        } else {
            sum = parseInt(a) + parseInt(b);
        }
    }
    return sum;
};
