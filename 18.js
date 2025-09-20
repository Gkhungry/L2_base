function createPhoneNumber(numbers) {
    const area = numbers.slice(0, 3).join('');
    const central = numbers.slice(3, 6).join('');
    const line = numbers.slice(6).join('');
    return `(${area}) ${central}-${line}`;
  }