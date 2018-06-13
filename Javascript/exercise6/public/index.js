// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commandElems = command.split(' ');
    var commandName = commandElems[0];
    if (commandName === 'ADD') {
        if (Object.keys(phoneBook).includes(commandElems[1])) {
            commandElems[2].split(',').map(function(elem){
                phoneBook[commandElems[1]].push(elem);
            })
        } else {
            phoneBook[commandElems[1]] = commandElems[2].split(',');
        }
        return true;
    } else if (commandName === 'REMOVE_PHONE') {
        var name;
        for (var i = 0; i < Object.keys(phoneBook).length; i++) {
            for (var j = 0; j < phoneBook[Object.keys(phoneBook)[i]].length; j++) {
                if (phoneBook[Object.keys(phoneBook)[i]][j] == commandElems[1]) {
                    name = Object.keys(phoneBook)[i];
                }
            }
        }
        if (name) {
            phoneBook[name].splice(phoneBook[name].indexOf(commandElems[1]),1);
            if (phoneBook[name].length == 0) {
                delete phoneBook[name];
            }
            return true;
        } else {
            return false;
        }
    } else {
        book =[];
        for (var i = Object.keys(phoneBook).length-1; i >= 0; i--) {
            book.push(Object.keys(phoneBook)[i] + ': ' + phoneBook[Object.keys(phoneBook)[i]].join(', '))
        }
        return book;
    }
    }

