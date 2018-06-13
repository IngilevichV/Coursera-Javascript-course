/**
 * @param {String} date
 * @returns {Object}
 */
function Time(date) {
    var obj = {
        init: function(date) {
            var arr = date.split(/[\s:-]/);
            this.newDate = new Date(Date.UTC(arr[0], arr[1]-1, arr[2], arr[3], arr[4]));
            return this;
        },
        method: {
            'years': 'FullYear',
            'months': 'Month',
            'days': 'Date',
            'hours': 'Hours',
            'minutes': 'Minutes'
        },
        add: function(value, type) {
            if ((value > 0) && (type in this.method)) {
                return this.setValueAdd(value, this.method[type]);
            } else {
                throw new TypeError("Введен неверный тип данных");
            }
        },
        subtract: function(value, type) {
            if ((value > 0) && (type in this.method)) {
                return this.setValueSubtract(value, this.method[type]);
            } else {
                throw new TypeError("Введен неверный тип данных");
            }
        },
        setValueAdd: function(value, method) {
            // console.info(this.newDate);
            this.newDate['set' + method](value + this.newDate['get' + method]());
            return this;
        },
        setValueSubtract: function(value, method) {
            this.newDate['set' + method](this.newDate['get' + method]() - value);
            return this;
        },

        toString: function() {
            var year = this.newDate.getUTCFullYear();
            var month = this.newDate.toLocaleString("ru",{timeZone : "UTC",month: '2-digit'});
            var day = this.newDate.toLocaleString("ru",{timeZone : "UTC",day: '2-digit'});
            var time = this.newDate.toLocaleString("ru",{timeZone : "UTC", hour: '2-digit', minute: '2-digit' });
            return year + "-" + month + "-" + day + " "+time
        }

    }
    return obj.init(date);
};

var str = "2012-01-11 12:35";
var time = new Time(str);
time.add(24, "hours").subtract(1, "months").add(3, "days").add(15, "minutes");
console.info(time);
