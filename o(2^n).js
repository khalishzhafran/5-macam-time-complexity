// time complexity: O(2^n)
function coba(x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    return coba(x - 1) + coba(x - 2);
}

coba(5);
