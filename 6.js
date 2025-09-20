function toWeirdCase(str) {
    return str
      .split(' ')
      .map(word =>
        [...word]
          .map((char, i) =>
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
          )
          .join('')
      )
      .join(' ');
  }