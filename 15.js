function howManyTimes(time1, time2) {
    const start = new Date(time1);
    const end = new Date(time2);
    let count = 0;
  
    for (let t = new Date(start); t < end; t.setSeconds(t.getSeconds() + 1)) {
      const hour = t.getHours();
      const minute = t.getMinutes();
      const second = t.getSeconds();
  
      if (minute === 0 && second < (hour % 12 || 12)) {
        count++;
      } else if (minute === 30 && second === 0) {
        count++;
      }
    }
  
    return count;
  }