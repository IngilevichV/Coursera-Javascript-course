/**
 * @param {String[]} hashtags
 * @returns {String}
 */


module.exports = function (hashtags) {
    tagsWithoutRepetition = [];
    hashtags = hashtags.map(function(elem) {
        return elem.toLowerCase();
    })
    hashtags.map(function(elem) {
        if (!tagsWithoutRepetition.includes(elem)) {
            tagsWithoutRepetition.push(elem);
        }
    });
    return tagsWithoutRepetition.join(', ');
};
