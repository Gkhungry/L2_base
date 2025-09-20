function isCircleSorted(arr) {
    let dropCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let next = arr[(i + 1) % arr.length];
      if (arr[i] > next) {
        dropCount++;
        if (dropCount > 1) return false;
      }
    }
  
    return true;
  }