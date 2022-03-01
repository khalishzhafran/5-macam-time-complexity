// time complexity: O(n^2)
function coba(x) {
    var result = [];
    for (var i = 0; i < x; i++) {
        result.push([]);
        for (var j = 0; j < x; j++) {
            if (i === 0 || i === 1) {
                result[i].push(j);
            } else {
                result[i].push(result[i - 1][j] + result[i - 2][j]);
            }
        }
    }
    return result;
}

coba(5);
