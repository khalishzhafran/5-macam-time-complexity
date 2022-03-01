// time complexity: O(log(n))
function coba(x) {
    if (x < 1) {
        return 1;
    } else {
        return x + coba(x - 1);
    }
}

coba(5);
