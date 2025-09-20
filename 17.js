function cache(func) {
    const memo = new Map();
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (memo.has(key)) {
        return memo.get(key);
      }
      const result = func(...args);
      memo.set(key, result);
      return result;
    };
  }