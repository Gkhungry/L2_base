function hasTwoCubeSums(n) {
    const cubeSums = new Map();
  
    for (let a = 1; a * a * a < n; a++) {
      for (let b = a + 1; b * b * b < n; b++) {
        const sum = a ** 3 + b ** 3;
        if (sum === n) {
          const key = `${a},${b}`;
          cubeSums.set(key, [a, b]);
        }
      }
    }
  
    const pairs = [];
  
    for (let a = 1; a * a * a < n; a++) {
      for (let b = a + 1; b * b * b < n; b++) {
        if (a ** 3 + b ** 3 === n) {
          pairs.push([a, b]);
        }
      }
    }
  
    for (let i = 0; i < pairs.length; i++) {
      for (let j = i + 1; j < pairs.length; j++) {
        const [a1, b1] = pairs[i];
        const [a2, b2] = pairs[j];
        const all = new Set([a1, b1, a2, b2]);
        if (all.size === 4) return true;
      }
    }
  
    return false;
  }