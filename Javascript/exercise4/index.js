/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var regex = RegExp('^[a-zA-Zа-яА-Я #]+$');

    if ((tweet) && (regex.test(tweet))) {
        arrSplit = tweet.split(' ');
        hashTags = arrSplit.filter(function(elem) {
            return elem[0] == "#";
        });

        tags = hashTags.map(function(elem) {
            return elem.slice(1);
        });
        return tags;
    }

};
