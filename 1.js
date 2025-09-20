function hasTwoCubeSums(n) {
    let max = n**(1/3) | 0,
        qty = 0,
        i, j;

    for (i = 1; i <= max; i++) {
        for (j = i; j <= max; j++) {
            if (i**3 + j**3 === n) {
              if(++qty > 1) return true;
            }
        }
    }
    return false;
}