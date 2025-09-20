function primeFactors(n) {
    const factors = new Map();
    let divisor = 2;
  
    while (n > 1) {
      if (n % divisor === 0) {
        factors.set(divisor, (factors.get(divisor) || 0) + 1);
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    return [...factors.entries()]
      .map(([prime, count]) => count === 1 ? `(${prime})` : `(${prime}**${count})`)
      .join('');
  }