function findMissing(list) {
    // Sort the list to ensure it's in order
    list.sort((a, b) => a - b);
  
    // Calculate the expected common difference
    const totalDiff = list[list.length - 1] - list[0];
    const expectedDiff = totalDiff / list.length;
  
    // Find where the gap is
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i + 1] - list[i] !== expectedDiff) {
        return list[i] + expectedDiff;
      }
    }
  }