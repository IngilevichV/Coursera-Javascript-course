/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection, selectFunc, filterFunc) {
    return collection.filter(filterFunc).map(selectFunc);
}

/**
 * @params {String[]}
 */
function select(...fields) {
    return function select(collection) {
        return fields.reduce(function(selectFields, field){
            selectFields[field] = collection[field];
            return selectFields;
        }, {});
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        return values.includes(collection[property]);
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
