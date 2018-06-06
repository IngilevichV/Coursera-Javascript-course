arr = [1,2,3,4,5]
result = []

function getSums(acc, current) {
    result.push(acc);
    return acc + current;
}

arr.reduce(getSums);
console.log(result);