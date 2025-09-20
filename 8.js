function expandedForm(num) {
    return num
      .toString()
      .split('')
      .map((digit, index, arr) => digit * Math.pow(10, arr.length - index - 1))
      .filter(n => n !== 0)
      .join(' + ');
  }