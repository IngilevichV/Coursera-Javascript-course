/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    if ((Number(hours) == hours && Number(minutes) == minutes && Number(interval) == interval) &&
    (Number(hours) % 1 == 0 && Number(minutes) % 1 == 0 && Number(interval) % 1 == 0) &&
    (Number(hours) >= 0 && Number(hours) <= 24) && (Number(minutes) >= 0 && Number(minutes) <= 59)) {
        new_minutes = minutes + interval;
        if (new_minutes > 59) {
            hours_to_add = Math.floor(new_minutes / 60);
            minutes_to_add = new_minutes % 60;
            hours_upd = hours + hours_to_add;
            minutes_upd = minutes = minutes_to_add;
            if (hours_upd >= 23) {
                final_hours = 24* Math.floor(hours_upd / 24) - 24;
                hours_updated = final_hours;
                minutes_updated = minutes_upd;
            } else {
                hours_updated = hours_upd;
                minutes_updated = minutes_upd;
            }
        } else {
            hours_updated = hours;
            minutes_updated = new_minutes;
        }

        if (hours_updated < 10) {
            hours_updated = '0' + hours_updated;
        }
        if (minutes_updated < 10) {
            minutes_updated = '0' + minutes_updated;
        }

        return hours_updated + ':' + minutes_updated;
    }


};
