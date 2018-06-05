/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    if ((Number(hours) == hours && Number(minutes) == minutes) && (hours % 1 == 0 && minutes % 1 == 0)
        && (hours >= 0 && hours <=23) && (minutes >=0 && minutes <= 59)) {
        return true;
    } else {
        return false;
    }
};
