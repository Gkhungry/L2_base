function whatCentury(year) {
    const numYear = parseInt(year, 10);
    const century = Math.ceil(numYear / 100);
  
    const suffix = (() => {
      if (century % 100 >= 11 && century % 100 <= 13) return 'th';
      switch (century % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    })();
  
    return century + suffix;
  }