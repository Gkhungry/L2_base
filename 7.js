const wave = str => str.split("").reduce((acc, val, i, [...arr]) => {
    if(val === " ") return acc;
    arr[i] = arr[i].toUpperCase();
    acc.push(arr.join(""));
    return acc;
  }, []);