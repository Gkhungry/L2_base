function longest(arr, n) {
    return arr
      .map((str, index) => ({ str, length: str.length, index }))
      .sort((a, b) => b.length - a.length || a.index - b.index)
      [n - 1].str;
  }