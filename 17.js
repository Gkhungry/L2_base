function cache(func) {
    const cachedResults = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (key in cachedResults) {
        return cachedResults[key];
      } else {
        const result = func(...args);
        cachedResults[key] = result;
        return result;
      }
    };
  }