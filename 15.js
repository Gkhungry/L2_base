function howManyTimes(time1,time2){
    const start = new Date(time1);
    const end = new Date(time2);
    let count = 0;
    let t = new Date(start);
    
    while (t < end) {
      let h = t.getHours();
      let m = t.getMinutes();
      let s = t.getSeconds();
    
    if(m === 0 && s < 12) {
      let hour = h % 12;
      if( hour === 0) hour = 12;
      if(s < hour) count++;
    }
    if(m === 30 && s === 0){
      count ++;
    }
      t.setSeconds(t.getSeconds() + 1);
    }
    return count;
  }