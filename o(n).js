// time complexity: O(n)
function coba(x) {
    var result = [];
    for (var i = 0; i < x; i++) {
        if (i === 0 || i === 1) {
            result.push(i);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }
    return result;
}

coba(5);
